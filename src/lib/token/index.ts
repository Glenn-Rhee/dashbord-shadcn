import { payloadToken } from "@/types/auth";
import jwt from "jsonwebtoken";
const secretToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "secrettoken1234";

export function setAccessToken(payload: payloadToken | {}) {
  const accesToken = jwt.sign(payload, secretToken, {
    expiresIn: "7d",
  });
  return accesToken;
}
