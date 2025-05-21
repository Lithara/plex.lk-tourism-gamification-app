import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, placeId } = await request.json();

    // Validate input
    if (!userId || !placeId) {
      return NextResponse.json(
        { error: "User ID and Place ID are required" },
        { status: 400 }
      );
    }

    // Check if the place exists and get its plexes value
    const place = await prisma.place.findFirst({
      where: { id: placeId },
      select: { plexes: true },
    });

    if (!place) {
      return NextResponse.json({ error: "Place not found" }, { status: 404 });
    } else {
      await prisma.placedFlag.create({
        data: {
          userId,
          placeId,
        },
      });

      await prisma.place.update({
        where: { id: placeId },
        data: { flags: { increment: 1 } },
      });

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { plxCount: true },
      });

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      const updateData =
        user.plxCount !== null
          ? { plxCount: { increment: place.plexes } } // Increment if not null
          : { plxCount: place.plexes }; // Set to 1 if null

      await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });
    }
    return NextResponse.json(
      {
        message: "Flag placed",
        flagged: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error toggling flag:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
