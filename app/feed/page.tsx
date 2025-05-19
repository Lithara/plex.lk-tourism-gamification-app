"use client";

import Image from "next/image";

import { Search, MapPin, ThumbsUp, MoreHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface FeedPost {
  id: string;
  userId: string;
  description: string;
  location: string;
  image: string;
  likesCount: number;
  createdAt: Date;
  user: {
    id: string;
    name: string;
    image: string;
  };
  like: boolean;
}

export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([]);
  const [query, setQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const session = useSession();
  const userId = session?.data?.user?.id;

  useEffect(() => {
    const fetchFeedPosts = async () => {
      try {
        const url = `/api/feed-post/all?userId=${userId}${
          searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""
        }`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch feed posts");
        }
        const data = await response.json();
        setFeedPosts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching feed posts:", error);
      }
    };

    fetchFeedPosts();
  }, [userId, searchQuery]);

  const getTimeAgo = (inputDate: string) => {
    const now = new Date();
    const date = new Date(inputDate);
    const timeDifference = now.getTime() - date.getTime(); // Difference in milliseconds

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return "Just now";
    }
  };

  const handleLikeToggle = async (postId: string) => {
    try {
      const response = await fetch("/api/likes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, postId }),
      });
      if (!response.ok) {
        throw new Error("Failed to toggle like");
      }
      // Refresh feed posts to update likesCount and like status
      const url = `/api/feed-post/all?userId=${userId}${
        searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : ""
      }`;
      const feedResponse = await fetch(url);
      if (!feedResponse.ok) {
        throw new Error("Failed to refresh feed posts");
      }
      const updatedPosts = await feedResponse.json();
      setFeedPosts(updatedPosts);
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  // delete post from array
  const handleDeletePost = (postId: string) => {
    setFeedPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] pb-6">
          <div className="relative max-w-xl mx-auto">
            <Input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search a Quest, Profile or Location"
              className="pl-4 pr-12 py-6 rounded-full border border-gray-300"
            />
            <Button
              onClick={() => handleSearch(query)}
              size="lg"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-white bg-primary-500 hover:bg-primary-600">
              <Search className="h-4 w-4" />
              <span className="">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      {/* <div className="bg-white">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                Quests
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
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                Medium
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
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Filter by Province
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter more
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        <div className=" mx-auto md:w-[700px] sm:w-[500px] sha w-[280px] lg:w-[800px]">
          {feedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-b-gray-400 last:border-b-0 first:rounded-t-lg last:rounded-b-lg shadow-2xl  overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={post.user.image || "/placeholder.svg"}
                      alt={post.user.name}
                    />
                    <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{post.user.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <span>{getTimeAgo(post.createdAt)}</span>
                      <span>•</span>
                      <MapPin className="h-3 w-3" />
                      <span>{post.location}, Sri Lanka</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-sm  text-gray-700 mb-2">
                  {post.description}
                </p>
              </div>

              {/* Post Image */}
              <div className="w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Post image"
                  width={800}
                  height={500}
                  className="w-full object-cover m-5"
                />
              </div>

              {/* Post Actions */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Button
                      onClick={() => handleLikeToggle(post.id)}
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0">
                      <ThumbsUp
                        fill={post.like ? "black" : "none"}
                        className="h-4 w-4 "
                      />
                    </Button>
                    <span className="text-sm">{post.likesCount}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-orange-500 font-medium">
                    +5 PLXES
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
