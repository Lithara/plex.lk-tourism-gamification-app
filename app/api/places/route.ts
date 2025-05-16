import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  // Fetch all places from the database

  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const places = await prisma.place.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      mainImage: true,
      flags: true,
      popular: true,
      knowledge: true,
      plexes: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    where: {
      // Filter by search term if provided
      ...(searchParams.get("search") && {
        name: {
          contains: searchParams.get("search"),
        },
      }),
      ...(searchParams.get("category") &&
        searchParams.get("category") !== "All Locations" && {
          category: {
            contains: searchParams.get("category"),
          },
        }),
      ...(searchParams.get("difficulty") && {
        difficulty: {
          contains: searchParams.get("difficulty"),
        },
      }),
    },
  });

  // if userId if provided fetch all favorites for the user
  if (userId) {
    const favorites = await prisma.favorite.findMany({
      where: {
        userId: userId,
      },
      select: {
        placeId: true,
      },
    });

    // Map the favorites to an array of place IDs
    const favoritePlaceIds = favorites.map((favorite) => favorite.placeId);

    // Add the favorite flag to each place
    places.forEach((place) => {
      place.favorite = favoritePlaceIds.includes(place.id);
    });
  }

  if (!places) {
    return NextResponse.json({ message: "No places found" }, { status: 404 });
  }

  return NextResponse.json(places);
}

//res.status(200).json({
//   ...place,
//   mapImage: `/maps/${place.district.toLowerCase()}.png`, // Add map image URL
// });
