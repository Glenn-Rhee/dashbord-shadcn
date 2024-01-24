import { hashedPassword } from "@/lib/bcrypt/password";
import {
  checkEmail,
  checkUsername,
  isStrongPass,
  responseFailed,
  responseSuccess,
} from "@/lib/validator";
import { SignUpTypes, dataUser } from "@/types/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: SignUpTypes = await req.json();
  const isEmail = checkEmail(body.email);
  if (isEmail.message !== "success") {
    return NextResponse.json(responseFailed(400, isEmail.message));
  }

  const isUsername = checkUsername(body.username);
  if (isUsername.message !== "success") {
    return NextResponse.json(responseFailed(400, isUsername.message));
  }

  const isPassword = isStrongPass(body.password);
  if (isPassword.message !== "success") {
    return NextResponse.json(responseFailed(400, isPassword.message));
  }

  const hashed = await hashedPassword(body.password);
  const data: dataUser = {
    username: body.username,
    email: body.email,
    password: hashed,
    amount: 0,
    capital: 0,
  };

  return NextResponse.json(responseSuccess("Success signup new user", data));
}
