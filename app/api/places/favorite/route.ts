import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  // change favorite status of a place
  const { placeId, userId } = await request.json();

  const favorite = await prisma.favorite.findFirst({
    where: {
      placeId,
      userId,
    },
  });
  if (favorite) {
    await prisma.favorite.delete({
      where: {
        id: favorite.id,
      },
    });
  } else {
    const createFav = await prisma.favorite.create({
      data: {
        userId,
        placeId,
      },
    });

    return NextResponse.json(createFav);
  }

  return NextResponse.json({});
}
