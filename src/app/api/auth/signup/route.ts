import { hashedPassword } from "@/lib/bcrypt/password";
import { setAccessToken } from "@/lib/token";
import {
  checkEmail,
  checkUsername,
  isStrongPass,
  responseFailed,
  responseSuccess,
} from "@/lib/validator";
import { setNewUser } from "@/prisma/controller";
import { SignUpTypes, dataUser } from "@/types/auth";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

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
    id: v4(),
    username: body.username,
    email: body.email,
    password: hashed,
    amount: 0,
    capital: 0,
  };

  const response = await setNewUser(data);
  if (response.statusCode !== 200) {
    return NextResponse.json(
      responseFailed(response.statusCode, response.message)
    );
  }

  const dataUser = {
    ...response.data,
    token: setAccessToken({
      email: data.email,
      username: data.username,
      id: data.id,
    }),
  };

  return NextResponse.json(responseSuccess(response.message, dataUser));
}
