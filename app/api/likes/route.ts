import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId, postId } = await request.json();

    // Validate input
    if (!userId || !postId) {
      return NextResponse.json(
        { error: "User ID and Post ID are required" },
        { status: 400 }
      );
    }

    // Check if the user has already liked the post
    const existingLike = await prisma.likes.findFirst({
      where: {
        userId,
        postId,
      },
    });

    if (existingLike) {
      // Unlike: Remove the like and decrement likesCount
      await prisma.$transaction([
        prisma.likes.delete({
          where: {
            id: existingLike.id,
          },
        }),
        prisma.feedPost.update({
          where: { id: postId },
          data: { likesCount: { decrement: 1 } },
        }),
      ]);

      return NextResponse.json(
        {
          message: "Post unliked",
          liked: false,
          likesCount: await getLikesCount(postId),
        },
        { status: 200 }
      );
    } else {
      // Like: Add the like and increment likesCount
      await prisma.$transaction([
        prisma.likes.create({
          data: {
            userId,
            postId,
          },
        }),
        prisma.feedPost.update({
          where: { id: postId },
          data: { likesCount: { increment: 1 } },
        }),
      ]);

      return NextResponse.json(
        {
          message: "Post liked",
          liked: true,
          likesCount: await getLikesCount(postId),
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error toggling like:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// Helper function to get updated likesCount
async function getLikesCount(postId: string): Promise<number> {
  const post = await prisma.feedPost.findUnique({
    where: { id: postId },
    select: { likesCount: true },
  });
  return post?.likesCount || 0;
}
