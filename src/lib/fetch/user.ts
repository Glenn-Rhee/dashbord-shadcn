import { SignUpTypes } from "@/types/auth";

export async function signupPost(data: SignUpTypes) {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataResponse = await response.json();
    return dataResponse;
  } catch (error) {
    console.log(error);
  }
}
