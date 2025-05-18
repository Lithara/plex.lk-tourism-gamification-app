import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const searchQuery = searchParams.get("q")?.trim();

  // Validate userId
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    // Build the where clause for filtering
    const where: any = {};
    if (searchQuery) {
      where.OR = [
        { description: { contains: searchQuery } },
        { location: { contains: searchQuery } },
      ];
    }

    // Fetch feed posts with user data and likes
    const feedPosts = await prisma.feedPost.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        likes: {
          select: {
            userId: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Map posts to include like: true/false
    const postsWithLikeStatus = feedPosts.map((post) => ({
      id: post.id,
      userId: post.userId,
      description: post.description,
      location: post.location,
      image: post.image,
      likesCount: post.likesCount,
      createdAt: post.createdAt,
      user: post.user,
      like: post.likes.some((like) => like.userId === userId),
    }));

    return NextResponse.json(postsWithLikeStatus, { status: 200 });
  } catch (error) {
    console.error("Error fetching feed posts:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
