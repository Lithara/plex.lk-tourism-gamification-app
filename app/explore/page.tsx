"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Filter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { locations } from "@/data/locations"; // Assuming you have a locations data file

export default function ExplorePage() {
  const categories = [
    "All Locations",
    "Beaches",
    "Waterfalls",
    "Rivers",
    "Lakes",
    "Islands",
    "Rainforests",
    "Villages",
    "Museums",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search a Quest, Profile or Location"
              className="pl-4 pr-12 py-2 rounded-full border border-gray-300"
            />
            <Button
              size="sm"
              className="absolute text-white right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 hover:bg-primary-600">
              <Search className="h-4 w-4" />
              <span className="">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white ">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Locations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                Easy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter by Province
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className="text-sm text-primary-500 flex items-center gap-1">
                Take a quiz
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
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "ghost"}
                  size="sm"
                  className={
                    index === 0 ? "bg-primary-500 hover:bg-primary-600" : ""
                  }>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <Link
              key={location.id}
              href={`/explore/${location.slug}`}
              className="block bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
              <div>
                <div className="relative">
                  <Image
                    src={
                      location.mainImage ||
                      "/placeholder.svg?height=200&width=300&query=landscape"
                    }
                    alt={location.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Add favorite logic here
                    }}>
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  {location.popular && (
                    <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
                      Most Popular
                    </Badge>
                  )}
                  {location.knowledge && (
                    <Badge className="absolute bottom-2 left-2 bg-gray-800 hover:bg-gray-900">
                      Book of Knowledge
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold">{location.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {location.location ||
                          `${location.name}, ${location.country}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-orange-500 font-bold">
                        {location.plexes} PLXES
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">
                    {location.description.length > 120
                      ? `${location.description.substring(0, 120)}...`
                      : location.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Image
                        src="/flag.png"
                        width={12}
                        height={12}
                        alt="Flag"
                      />
                      <span className="text-xs text-gray-500">
                        {location.flags} Flags
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
