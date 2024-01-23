import { CSSProperties } from "react";
import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: "Username must be at least 6 characters",
    })
    .max(50),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Confirmation Password must be at least 6 characters",
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const override: CSSProperties = {
  display: "block",
  paddingBottom: "1rem",
};
