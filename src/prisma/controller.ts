import { LoginTypes, dataUser } from "@/types/auth";
import prisma from "./client";
import { comparePassword } from "@/lib/bcrypt/password";

export async function setNewUser(data: dataUser) {
  try {
    const isRegistered = await findByEmail(data.email);
    if (isRegistered) {
      return { message: "Email already registered", data: {}, statusCode: 403 };
    }

    const response = await prisma.user.create({
      data: {
        id: data.id,
        username: data.username,
        email: data.email,
        password: data.password,
        amount: data.amount,
        capital: data.capital,
      },
    });

    return {
      message: "Success create new user",
      data: response,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: "Internal Server Error",
      data: {},
      statusCode: 500,
    };
  } finally {
    await prisma.$disconnect();
  }
}

export async function loginUser(data: LoginTypes) {
  try {
    const registered: dataUser | null | undefined = await findByEmail(
      data.email
    );
    if (!registered) {
      return {
        message: "Email not registered",
        data: {},
        statusCode: 404,
      };
    }

    const isCompared = await comparePassword(
      data.password,
      registered.password
    );

    if (!isCompared) {
      return {
        message: "Password not match",
        data: {},
        statusCode: 401,
      };
    }

    return {
      message: "success",
      data: registered,
      statusCode: 200,
    };
  } catch (error) {
    return {
      message: "Internal Server Error",
      data: {},
      statusCode: 500,
    };
  }
}

export async function findByEmail(email: string) {
  try {
    const response = await prisma.user.findFirst({
      where: { email },
    });

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getAllUsers() {
  try {
    const response = await prisma.user.findMany();
    return response;
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}
