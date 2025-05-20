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

      await prisma.user.update({
        where: { id: userId },
        data: { plxCount: { increment: place.plexes } },
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
