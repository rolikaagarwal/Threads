import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

type jwtDecoded ={
  user_id: string;
  iat: number;
  exp: number;
}
export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    return res.status(401).json({ error: "Access Token not received" });
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded) => {
        if (error) {
          return res.status(401).json({ error: "Not Authorized" });
        }
				const decodedToken = decoded as jwtDecoded
				if(decodedToken.user_id){
					res.locals.user_id = decodedToken.user_id;
					next();
				}
      }
    );
  } catch (error) {
    return res.status(503).json({ error: error });
  }
};
