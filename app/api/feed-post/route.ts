import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

async function ensureDirectoryExists(directory: string) {
  try {
    await mkdir(directory, { recursive: true });
  } catch (error) {
    // Directory already exists or cannot be created
    console.error("Error creating directory:", error);
  }
}

export async function POST(request: Request) {
  try {
    // Check if the request is multipart/form-data
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Content type must be multipart/form-data" },
        { status: 415 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string;
    const userId = formData.get("userId") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Generate a unique filename to prevent collisions
    const uniqueId = uuidv4();
    const fileExtension = file.name.split(".").pop() || "jpg";
    const fileName = `${uniqueId}.${fileExtension}`;

    // Define the directory path
    const imagesDirectory = path.join(process.cwd(), "public", "images");

    // Ensure the directory exists
    await ensureDirectoryExists(imagesDirectory);

    // Define the file path
    const filePath = path.join(imagesDirectory, fileName);

    // Convert the file to a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Write the file to the public/images directory
    await writeFile(filePath, buffer);

    // Create the public URL for the image
    const imageUrl = `/images/${fileName}`;

    const metadata = await prisma.feedPost.create({
      data: {
        image: imageUrl,
        description,
        location,
        userId,
      },
    });

    return NextResponse.json({
      success: true,
      url: imageUrl,
      metadata,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image", details: (error as Error).message },
      { status: 500 }
    );
  }
}

// Optional: Add a GET handler to retrieve images
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const post = await prisma.feedPost.findMany({
    where: {
      ...(userId && { userId }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(post);
}
