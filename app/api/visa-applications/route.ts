import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    // Authenticate user

    // Parse multipart form data
    const formData = await request.formData();

    const userId = formData.get("userId") as string;

    const data: any = {
      personalInfo: {},
      passportInfo: {},
      childInfo: {},
      travelInfo: {},
      contactInfo: {},
      declarations: {},
      documentUpload: {},
    };

    for (const [key, value] of formData.entries()) {
      if (key === "userId") continue; // Skip userId
      if (typeof value === "string") {
        const parts = key.split(".");
        if (parts.length !== 2) {
          console.warn(`Invalid form data key: ${key}`);
          continue; // Skip invalid keys
        }
        const [section, field] = parts;
        if (!(section in data)) {
          console.warn(`Invalid section: ${section}`);
          continue; // Skip invalid sections
        }
        if (!field) {
          console.warn(`Invalid field for key: ${key}`);
          continue; // Skip empty fields
        }
        if (section === "declarations") {
          data[section][field] = value === "true";
        } else if (section === "childInfo" && field === "numberOfChildren") {
          data[section][field] = parseInt(value, 10);
        } else {
          data[section][field] = value;
        }
      }
    }

    // Handle file uploads
    const fileFields = [
      "passportPhoto",
      "portraitPhoto1",
      "portraitPhoto2",
      "returnTicket",
      "proofOfAccommodation",
    ];
    for (const field of fileFields) {
      const file = formData.get(`documentUpload.${field}`) as File | null;
      if (file) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name}`;
        const filePath = path.join(
          process.cwd(),
          "public",
          "uploads",
          filename
        );
        await writeFile(filePath, buffer);
        data.documentUpload[field] = `/uploads/${filename}`;
      } else {
        data.documentUpload[field] = null;
      }
    }

    // Validate required fields (example)
    if (!data.personalInfo.surname || !data.passportInfo.passportNumber) {
      return NextResponse.json(
        { error: "Surname and passport number are required" },
        { status: 400 }
      );
    }

    // Create visa application
    const visaApplication = await prisma.visaApplication.create({
      data: {
        userId,
        personalInfo: data.personalInfo,
        passportInfo: data.passportInfo,
        childInfo: data.childInfo,
        travelInfo: data.travelInfo,
        contactInfo: data.contactInfo,
        declarations: data.declarations,
        documentUpload: data.documentUpload,
      },
    });

    return NextResponse.json(
      {
        message: "Visa application submitted successfully",
        id: visaApplication.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting visa application:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
