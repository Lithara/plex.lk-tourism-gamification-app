"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, MapPin } from "lucide-react";
import type { LocationDetails } from "@/data/locations";

interface BookOfKnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: LocationDetails;
}

export function BookOfKnowledgeModal({
  isOpen,
  onClose,
  location,
}: BookOfKnowledgeModalProps) {
  const [mounted, setMounted] = useState(false);

  // Handle escape key press to close modal
  useEffect(() => {
    setMounted(true);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  if (!isOpen) return null;

  // If there's no knowledge content, show a fallback
  if (!location.knowledgeContent) {
    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50">
        <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg my-8 mx-4 max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{location.name}</h2>
            <p className="text-gray-500">
              Book of Knowledge content is not available for this location.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-lg my-8 mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {/* Hero image */}
        <div className="relative h-80 w-full">
          <Image
            src={location.mainImage || "/placeholder.svg"}
            alt={location.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
        </div>

        {/* Content */}
        <div className="p-8 pt-4">
          <h2 className="text-3xl font-bold mb-2">
            {location.knowledgeContent.title}
          </h2>
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-6">
            <MapPin className="h-4 w-4" />
            <span>
              {location.name}, {location.country}
            </span>
          </div>

          <div className="space-y-6">
            <p className="text-gray-700">
              {location.knowledgeContent.description}
            </p>

            {location.knowledgeContent.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <p className="text-gray-700">{section.text}</p>

                {section.images && section.images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 my-6">
                    {section.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${location.name} image ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
