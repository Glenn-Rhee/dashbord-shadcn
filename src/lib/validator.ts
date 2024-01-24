import validator from "validator";
export function checkEmail(email: string) {
  let validated = validator.isEmpty(email, { ignore_whitespace: true });
  if (validated) {
    return { message: "Email is required" };
  }

  if (typeof email !== "string") {
    return { message: "Please fill email properly" };
  }

  validated = validator.isEmail(email);
  if (!validated) {
    return { message: "Please fill email properly" };
  }

  return { message: "success" };
}

export function checkUsername(username: string): { message: string } {
  let validated = validator.isEmpty(username, { ignore_whitespace: true });
  if (validated) {
    return { message: "Username is required" };
  }

  validated = username.length < 6;
  if (validated) {
    return { message: "Username must be at least 6 characters" };
  }

  return { message: "success" };
}

export function isStrongPass(password: string): { message: string } {
  let validated = validator.isEmpty(password, { ignore_whitespace: true });
  if (validated) {
    return { message: "Password is required" };
  }

  const validatedStrong = validator.isStrongPassword(password, {
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 0,
  });

  if (!validatedStrong) {
    return {
      message:
        "Password must be at least 6 characters, 1 uppercase, and 1 numbers",
    };
  }
  return { message: "success" };
}

export const responseFailed = (statusCode: number, message: string) => {
  return { status: "failed", statusCode, message };
};

export const responseSuccess = (message: string, data: any) => ({
  status: "success",
  statusCode: 200,
  message,
  data,
});
