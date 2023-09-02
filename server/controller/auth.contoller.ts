import { Request, Response } from "express";
import prisma from "../prisma/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
type input = {
  fullName: string;
  email: string;
  password: string;
};
export const signUpController = async (req: Request, res: Response) => {
  const { fullName, email, password }: input = req.body;
  if (!fullName || !email || !password)
    return res.status(401).json({ message: "Invalid Details" });
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(403).json({ error: " User Already Exists" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const savedUser = await prisma.user.create({
      data: {
        email: email,
        name: fullName,
        password: hashedPassword,
      },
    });

    if (!savedUser) {
      return res.status(503).json({ error: "Error in creating user" });
    }
    const token = jwt.sign(
      { user_id: savedUser.user_id },
      process.env.SECRET_KEY!,
      { expiresIn: "30d" }
    );
    res.cookie("accessToken", token, { path: "/", httpOnly: true });
    res.status(200).json({ message: "access token generated sucessfully!" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({ error: "Enter valid credentials" });
  }
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    const isCorrect: boolean = await bcrypt.compare(password, user.password);

    if (!isCorrect) {
      return res.status(401).json({ error: "Password did not match" });
    }
    const token = jwt.sign({ user_id: user.user_id }, process.env.SECRET_KEY!, {
      expiresIn: "30d",
    });
    res.cookie("accessToken", token, { path: "/", httpOnly: true });
    res.status(200).json({ message: "access token generated sucessfully!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
