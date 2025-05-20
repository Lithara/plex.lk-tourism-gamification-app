import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { name, userId } = data;

    // Validate the input
    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Name cannot be empty" },
        { status: 400 }
      );
    }

    // Get the current user session

    // Update the user's name in the database using Prisma
    await prisma.user.update({
      where: { id: userId },
      data: { name },
    });

    return NextResponse.json(
      { success: true, message: "Name updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating name:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
