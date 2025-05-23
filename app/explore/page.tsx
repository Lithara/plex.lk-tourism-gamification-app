"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Filter, Heart, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
// Assuming you have a locations data file

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    "Tea Estates",
    "Urban Parks",
    "Gardens",
    "Temples",
    "Mosques",
    "Churches",
    "Monasteries",
    "Cemeteries",
    "Parks",
    "Zoos",
  ];

  const session = useSession();
  const userId = session?.data?.user?.id;

  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [mainCategory, setMainCategory] = useState("All Locations");

  const toggleFavorite = async (placeId) => {
    if (!userId) {
      return;
    }
    try {
      const response = await fetch(`/api/places/favorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ placeId, userId }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data) {
        // Update the locations state to reflect the new favorite status
        setLocations((prevLocations) =>
          prevLocations.map((location) =>
            location.id === placeId
              ? { ...location, favorite: !location.favorite }
              : location
          )
        );
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  useEffect(() => {
    // Fetch data from the API
    //add user id to the request
    // const userId =
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/places?userId=${userId}&search=${search}&difficulty=${difficulty}&category=${mainCategory}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setLocations(data);
        console.log("Fetched locations:", data);
        // Set locations state here if using useState
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }
    fetchData();
  }, [userId, search, difficulty, mainCategory]);

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="relative max-w-xl mx-auto">
            <Input
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              type="text"
              placeholder="Search a Quest, Profile or Location"
              className="pl-4 pr-12 py-2 rounded-full border border-gray-300"
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                setSearch(searchValue);
              }}
              size="sm"
              className="absolute text-white right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 hover:bg-primary-600">
              <Search className="h-4 w-4" />
              <span className="">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white container justify-start flex mx-auto">
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

              <Select defaultValue="All" onValueChange={setDifficulty}>
                <SelectTrigger className="w-[120px] h-8 text-foreground">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="w-[120px] bg-white">
                  <SelectItem value="All">
                    <div className="flex items-center gap-1">
                      <Circle
                        fill="currentColor"
                        className="h-2 w-2 text-black-500"
                      />
                      <span> All</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="easy" className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <Circle
                        fill="currentColor"
                        className="h-2 w-2 text-primary-500"
                      />
                      <span> Easy</span>
                    </div>
                  </SelectItem>
                  <SelectItem
                    value="medium"
                    className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <Circle
                        fill="currentColor"
                        className="h-2 w-2 text-yellow-500"
                      />
                      <span> Medium</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="hard" className="flex items-center gap-1">
                    <div className="flex items-center gap-1">
                      <Circle
                        fill="currentColor"
                        className="h-2 w-2 text-red-500"
                      />
                      <span> Hard</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

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
      <div className="bg-white  container mx-auto  ">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              {categories.map((category, index) => (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMainCategory(category);
                  }}
                  // change the color of the button if it is selected

                  key={index}
                  variant={mainCategory === category ? "default" : "ghost"}
                  size="sm"
                  className={
                    mainCategory === category
                      ? "bg-primary-500 hover:bg-primary-600"
                      : ""
                  }>
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white container flex justify-center mx-auto w-full">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location) => (
              <Link
                key={location.id}
                href={`/explore/${location.slug}`}
                className="block bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
                <div>
                  <div className="relative">
                    <Image
                      src={`/images${location.mainImage}`}
                      alt={location.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {userId && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className={` ${
                          location.favorite ? "bg-primary-500" : "bg-white/50"
                        } absolute top-2 right-2 h-8 w-8 rounded-full hover:bg-white`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleFavorite(location.id);
                        }}>
                        <Heart className="h-4 w-4" />
                        <span className="sr-only">Like</span>
                      </Button>
                    )}
                    {location.popular === true && (
                      <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">
                        Most Popular
                      </Badge>
                    )}
                    {location.knowledge === true && (
                      <Badge className="absolute bottom-2 left-2 bg-gray-800 hover:bg-gray-900 text-white">
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
                          {location.location || `${location.name}, Sri Lanka`}
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
    </div>
  );
}
