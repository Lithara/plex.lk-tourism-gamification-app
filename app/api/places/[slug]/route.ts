import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Get the place slug from the request parameters
  const slug = params.slug;
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  console.log("Fetching place with slug:", params.slug);

  const place = await prisma.place.findUnique({
    where: {
      slug: slug,
    },
    include: {
      knowledgeContent: false,
      coordinates: true,
      addedBy: true,
    },
  });

  if (userId) {
    const favorite = await prisma.favorite.findFirst({
      where: {
        placeId: place.id,
        userId: userId,
      },
    });

    if (favorite) {
      console.log("Favorite found");

      // push favorite status to place object
      place.favorite = true;
    } else {
      // push favorite status to place object
      place.favorite = false;
    }
  }

  return NextResponse.json(place);
}
