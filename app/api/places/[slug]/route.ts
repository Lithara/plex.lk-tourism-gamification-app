import { UserOrderByRelevanceFieldEnum } from "./../../../../node_modules/.prisma/client/index.d";
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

    //  knowledge content -> sections oder by createdAt DESC

    const favorite = await prisma.favorite.findFirst({
      where: {
        placeId: place.id,
        userId: userId,
      },
    });

    if (favorite) {
      place.favorite = true;
    } else {
      place.favorite = false;
    }

    const flag = await prisma.placedFlag.findFirst({
      where: {
        placeId: place.id,
        userId: userId,
      },
    });

    if (flag) {
      place.flagged = true;
    } else {
      place.flagged = false;
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
