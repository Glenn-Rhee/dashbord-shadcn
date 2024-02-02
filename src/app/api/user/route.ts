import { responseSuccess } from "@/lib/validator";
import { getAllUsers } from "@/prisma/controller";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const response = await getAllUsers();
  return NextResponse.json(responseSuccess("Success get all users!", response));
}
