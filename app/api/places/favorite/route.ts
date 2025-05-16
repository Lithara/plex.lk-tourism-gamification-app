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
    await prisma.favorite.create({
      data: {
        placeId,
        userId,
      },
    });
  }
  // if the favorite is created return 201
  // if the favorite is deleted return 204
  return NextResponse.json({});
}
