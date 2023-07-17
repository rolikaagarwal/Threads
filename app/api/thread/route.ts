import { NextResponse } from "next/server";
import prisma from "@/prisma";

export const GET = async (req: Request) => {
  console.log(req.method);
  try {
    const allThread = await prisma.thread.findMany({});
    if (!allThread)
      return NextResponse.json(
        { Error: "Error fetching Threads" },
        { status: 400 }
      );
    return NextResponse.json(
      { message: "Success", allThread },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    if (!body) {
      return NextResponse.json({ Error: "No thread" }, { status: 400 });
    }
    const { caption, userName } = body;
    const newThread = await prisma.thread.create({
      data: { caption, userName },
    });
    if (!newThread) {
      return NextResponse.json({ Error: "Error in Posting" }, { status: 400 });
    }
    return NextResponse.json(newThread, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 400 });
  }
};
