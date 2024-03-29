import { LoginTypes, SignUpTypes } from "@/types/auth";

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

export async function loginPost(data: LoginTypes) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getUser() {
  try {
    const url =
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_BASEURL_FETCH
        : "https://dashbord-shadcn.vercel.app";
    const response = await fetch(url + "/api/user", {
      method: "GET",
    });

    return await response.json();
  } catch (error: any) {
    console.log(error.message, "p");
  }
}
