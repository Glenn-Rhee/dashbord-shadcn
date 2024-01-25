import { setAccessToken } from "@/lib/token";
import {
  checkEmail,
  isStrongPass,
  responseFailed,
  responseSuccess,
} from "@/lib/validator";
import { loginUser } from "@/prisma/controller";
import { LoginTypes } from "@/types/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body: LoginTypes = await req.json();

  const isEmail = checkEmail(body.email);
  if (isEmail.message !== "success") {
    return NextResponse.json(responseFailed(400, isEmail.message));
  }

  const isPassword = isStrongPass(body.password);
  if (isPassword.message !== "success") {
    return NextResponse.json(responseFailed(400, isPassword.message));
  }

  const response = await loginUser(body);
  if (response.message !== "success") {
    return NextResponse.json(
      responseFailed(response.statusCode, response.message)
    );
  }

  const data = {
    ...response.data,
    token: setAccessToken(response.data),
  };

  return NextResponse.json(responseSuccess("Success login", data));
}
