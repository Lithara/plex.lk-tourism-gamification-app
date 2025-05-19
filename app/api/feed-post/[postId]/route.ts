import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  { params }: { params: { postId: string } }
) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  // Validate input
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  if (!params.postId) {
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
  }

  try {
    // Check if the post exists and belongs to the user
    const post = await prisma.feedPost.findUnique({
      where: { id: params.postId },
      select: { userId: true },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.userId !== userId) {
      return NextResponse.json(
        { error: "Unauthorized: You can only delete your own posts" },
        { status: 403 }
      );
    }

    // Delete the post (cascades to Likes due to onDelete: Cascade)
    await prisma.feedPost.delete({
      where: { id: params.postId },
    });

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
