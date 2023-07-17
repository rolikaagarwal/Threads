import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma";

export const GET = async (req: Request, res: NextResponse) => {
  console.log(req.method);
  try {
    const allThread = await prisma.thread.findMany({});
    return NextResponse.json(
      { message: "Success", allThread },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};

