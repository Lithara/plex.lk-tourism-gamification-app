"use server";

import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { signUpSchema } from "@/lib/validations";

interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
  country: string;
}

export async function registerUser({
  name,
  email,
  country,
  password,
}: RegisterUserParams) {
  const hashedPassword = await hash(password, 10);

  // Validation user input with zod using lib/validation.js
  const validationResult = signUpSchema.safeParse({
    name,
    email,
    country,
    password,
  });
  if (!validationResult.success) {
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      error: errors,
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  await prisma.user.create({
    data: {
      name,
      email,
      country,
      hashedPassword,
    },
  });

  return { success: true };
}

interface UpdateProfileParams {
  userId: string;
  name: string;
  country: string;
}

export async function updateProfile({
  userId,
  name,
  country,
}: UpdateProfileParams) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      country,
    },
  });

  revalidatePath("/profile");
  revalidatePath("/dashboard");

  return { success: true };
}
