"use client";

import { use, useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOfKnowledgeModal } from "@/components/book-of-knoledge-model";
import MapEmbed from "@/components/MapEmbed";

import { notFound } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LocationPage({ params }: { params: { slug: string } }) {
  const { slug } = use(params);

  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);

  // Check if location exists
  // If location is not found, redirect to 404 page
  const [location, setLocation] = useState({});
  const session = useSession();
  const userId = session?.data?.user?.id;

  useEffect(() => {
    // Fetch location data from API
    const fetchLocationData = async () => {
      const res = await fetch(`/api/places/${slug}?userId=${userId}`);
      if (!res.ok) {
        notFound();
      }
      const data = await res.json();
      console.log(data);

      setLocation(data);
    };
    fetchLocationData();
  }, [slug, userId]);

  const toggleFavorite = async () => {
    if (!userId) {
      return;
    }
    try {
      const response = await fetch(`/api/places/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ placeId: location.id, userId }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        // Update the locations state to reflect the new favorite status
        setLocation((prevLocation) => ({
          ...prevLocation,
          favorite: !prevLocation.favorite,
        }));
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        {/* Location Title and Badges */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{location.name}</h1>
          <div className="flex items-center gap-2">
            <Button
              onClick={toggleFavorite}
              variant="ghost"
              size="sm"
              className="text-primary-500 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={location.favorite === true ? "teal" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {location.favorite === true ? "Saved" : "Save"}
            </Button>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {location.popular === true && (
            <Badge className="bg-orange-500 hover:bg-orange-600 rounded-full">
              Most Popular
            </Badge>
          )}
          {location.knowledge === true && (
            <Badge className="bg-black text-white rounded-full">
              Book of Knowledge
            </Badge>
          )}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={
                  `/images${location.mainImage}` ||
                  "/placeholder.svg?height=400&width=600&query=landscape"
                }
                alt={location.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {location.galleryImages?.slice(0, 4).map((image, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden">
                <Image
                  src={
                    `/images${image}` ||
                    `/placeholder.svg?height=200&width=200&query=landscape${index}`
                  }
                  alt={`${location.name} gallery image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
                {index === 3 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white text-sm">See more images</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-2">
              {location.name}, {location.country}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-4 w-4 text-primary-500" />
              <span className="text-sm text-primary-500">
                {location.visitors} People visited this place
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">
                {location.description}
              </span>
            </div>

            <div className="text-sm text-gray-700 mb-6">
              <p className="mb-4">
                {location.longDescription?.split("\n\n")[0]}
              </p>
              {location.longDescription?.split("\n\n")[1] && (
                <p>{location.longDescription?.split("\n\n")[1]}</p>
              )}
            </div>

            {location.knowledge && (
              <Button
                variant="outline"
                className="flex bg-black text-white items-center gap-2 rounded-full"
                onClick={() => setIsKnowledgeModalOpen(true)}>
                Read the book of knowledge
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M12 6h0" />
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </Button>
            )}
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">{location.plexes}</span>
                <span className="text-orange-500 font-bold">PLXES</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>

            <div className="mb-6">
              <h3
                className={`${
                  location.difficulty === "Easy"
                    ? "text-primary-500"
                    : location.difficulty === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                } font-medium mb-2`}>
                {location.difficulty}
              </h3>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Location permission required
              </p>
            </div>

            <Button className="w-full rounded-full bg-primary-500 hover:bg-primary-600 text-white">
              Place my flag
            </Button>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            Where you can find{" "}
            <span className="text-primary-500">{location.name}</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96 p-2">
            <div className="lg:col-span-2 relative h-full bg-gray-100 rounded-lg overflow-hidden">
              <MapEmbed
                latitude={location.coordinates?.lat}
                longitude={location.coordinates?.lng}
              />

              <div className="absolute bottom-4 right-4">
                <Button
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${location.coordinates?.lat},${location.coordinates?.lng}`,
                      "_blank"
                    );
                  }}
                  variant="outline"
                  size="sm"
                  className="bg-white text-black hover:bg-gray-100 flex items-center gap-1">
                  Open in Google Map
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className=" p-2 relative h-full bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={`/maps/${location.district}.svg`}
                alt="Sri Lanka map"
                fill
                style={{ objectFit: "contain" }}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Added By Section */}
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">
                Added by{" "}
                <span className="font-medium">{location.addedBy?.name}</span>
              </p>
              <p className="text-xs text-gray-500">{location.addedBy?.time}</p>
            </div>
          </div>
          <Button
            variant="default"
            size="sm"
            className="text-white rounded-full border-primary-500  hover:bg-primary-50">
            Follow
          </Button>
        </div>

        {/* Special Notes */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            Special notes before you exploring{" "}
            <span className="text-primary-500">{location.name}</span>
          </h2>
          <div className="text-sm text-gray-700">
            <p className="mb-4">{location.specialNotes?.split("\n\n")[0]}</p>
            {location.specialNotes?.split("\n\n")[1] && (
              <p>{location.specialNotes?.split("\n\n")[1]}</p>
            )}
          </div>
        </div>

        {/* Environmental Message */}
        <div className="relative rounded-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center p-8">
              <h2 className="text-2xl font-bold mb-2">
                Keep the <span className="text-primary-500">environment</span>{" "}
                clean & help to protect the world.
              </h2>
            </div>
            <div className="relative h-64">
              <Image
                src="/environment.jpg"
                alt="Environmental protection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Book of Knowledge Modal */}
      <BookOfKnowledgeModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        location={location}
      />
    </div>
  );
}
