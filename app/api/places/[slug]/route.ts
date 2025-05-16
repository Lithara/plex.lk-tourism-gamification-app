import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // Get the place slug from the request parameters

  const { slug } = params;
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  try {
    const place = await prisma.place.findUnique({
      where: {
        slug: slug,
      },
      include: {
        coordinates: true,
        addedBy: true,
        knowledgeContent: {
          include: {
            sections: true,
          },
        },
      },
      // add knowledge sections
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
  } catch (error) {
    console.error("Error fetching place:", error);
    return NextResponse.json(
      { error: "Error fetching place" },
      { status: 500 }
    );
  }
}
