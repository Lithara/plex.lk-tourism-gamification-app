import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { userId } = params;

    // Validate userId
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Query favorites with related place data
    const favorites = await prisma.favorite.findMany({
      where: {
        userId,
      },
      include: {
        place: {
          select: {
            id: true,
            slug: true,
            name: true,
            district: true,
            category: true,
            description: true,
            mainImage: true,
            plexes: true,
            flags: true,
            visitors: true,
            difficulty: true,
            popular: true,
            coordinates: {
              select: {
                lat: true,
                lng: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Map the response to include place data with favorite: true
    const favoritePlaces = favorites.map((favorite) => ({
      ...favorite.place,
      favorite: true, // Add favorite: true to indicate the place is favorited
    }));

    return NextResponse.json(favoritePlaces, { status: 200 });
  } catch (error) {
    console.error("Error fetching favorite places:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
