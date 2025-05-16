"use server";

import { prisma } from "@/lib/prisma";

export async function getAllPlaces() {
  const places = await prisma.place.findMany();
  return places;
}

export async function getPlaceById(id: string) {
  const place = await prisma.place.findUnique({
    where: {
      id,
    },
  });

  return place;
}

export async function getPlacesByUserId(userId: string) {
  const places = await prisma.place.findMany({
    where: {
      userId,
    },
  });

  return places;
}
