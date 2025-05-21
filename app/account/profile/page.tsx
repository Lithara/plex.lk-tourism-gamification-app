"use client";

import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadModal from "@/components/upload-model";
import { Avatar } from "@radix-ui/react-avatar";
import { CrossIcon, Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const session = useSession();
  const user = session.data?.user;
  const [myPosts, setMyPosts] = useState([]);
  const [savedPlaces, setSavedPlaces] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleUpload = (data: {
    files: File[];
    caption: string;
    location: string;
  }) => {
    try {
      const formData = new FormData();
      if (user?.id) {
        formData.append("file", data.files[0]);
        formData.append("description", data.caption);
        formData.append("location", data.location);
        formData.append("userId", user?.id);
      } else {
        return;
      }

      fetch("/api/feed-post", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error uploading:", error);
    }
    setIsModalOpen(false);
    // Here you would typically send the data to your backend
  };

  const getTimeAgo = (inputDate) => {
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

  useEffect(() => {
    fetch("/api/feed-post?userId=" + user?.id)
      .then((res) => res.json())
      .then((data) => {
        setMyPosts(data);
        console.log(data);
      });
  }, [user?.id, isModalOpen]);

  const getSavedPlaces = () => {
    fetch(`/api/places/favorite/user/${user?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setSavedPlaces(data);
        console.log(data);
      });
  };

  const handleDeletePost = async (postId: string) => {
    const prevPosts = myPosts;
    const updatedPosts = myPosts.filter((post) => post.id !== postId);
    setMyPosts(updatedPosts); // Optimistic update

    try {
      const response = await fetch(
        `/api/feed-post/${postId}?userId=${user?.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      setMyPosts(prevPosts); // Revert on error
      alert(error.message); // Show error to user
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="bg-transparent border-b w-full rounded-none justify-start space-x-6 px-0">
            <TabsTrigger
              value="posts"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#3AAEA9] data-[state=active]:text-black rounded-none bg-transparent">
              My posts
            </TabsTrigger>
            <TabsTrigger
              onClick={getSavedPlaces}
              value="saved"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#3AAEA9] data-[state=active]:text-black rounded-none bg-transparent">
              Saved
            </TabsTrigger>
            <TabsTrigger
              value="milestones"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#3AAEA9] data-[state=active]:text-black rounded-none bg-transparent">
              Completed Milestones
            </TabsTrigger>
            <TabsTrigger
              value="quests"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#3AAEA9] data-[state=active]:text-black rounded-none bg-transparent">
              Ongoing Quests
            </TabsTrigger>
            <TabsTrigger
              value="help"
              className="data-[state=active]:border-b-2 data-[state=active]:border-[#3AAEA9] data-[state=active]:text-black rounded-none bg-transparent">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="pt-6">
            <div className="space-y-6">
              {/* Post Item */}

              {myPosts.map((post, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <Avatar>
                        <AvatarImage
                          src={user?.image}
                          referrerPolicy="no-referrer"
                          alt={user?.name}
                        />
                        <AvatarFallback>{user?.name}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <p className="font-medium">{user?.name}</p>
                      <p className="text-xs text-gray-500">
                        {getTimeAgo(post.createdAt)} • {post.location}, Sri
                        Lanka
                      </p>
                    </div>
                    <div className="ml-auto flex">
                      <Button variant={"ghost"} className="p-1">
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
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="19" cy="12" r="1" />
                          <circle cx="5" cy="12" r="1" />
                        </svg>
                      </Button>
                      <Button
                        onClick={() => handleDeletePost(post.id)}
                        variant={"ghost"}
                        className="p-1">
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
                          <path d="M3 6h18" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  <p className="mb-4">{post.description}</p>

                  <div className="mb-4">
                    <Image
                      src={post.image}
                      alt="Beach"
                      className="w-full h-64 object-cover rounded-lg"
                      width={640}
                      height={360}
                    />
                  </div>

                  <div className="flex items-center">
                    <button className="flex items-center">
                      <Heart className="mr-1 h-5 w-5" />
                      <span>{post.likesCount}</span>
                    </button>
                    <div className="ml-auto text-xs text-amber-600 font-medium">
                      +5 PLXS
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="pt-6">
            <div className="space-y-6">
              {savedPlaces.map((place, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {place.popular && (
                        <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">
                          Most Popular
                        </div>
                      )}
                      <Button variant={"ghost"} className="ml-auto">
                        <Heart
                          className="h-5 w-5 text-[#3AAEA9]"
                          fill={place.favorite ? "#3AAEA9" : "none"}
                        />
                      </Button>
                    </div>
                    <Image
                      src={`/images${place.mainImage}`}
                      alt={place.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      width={320}
                      height={640}
                    />
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-xs text-amber-600">
                        <span>{place.plexes} PLXES</span>
                        <div className="w-1 h-1 bg-gray-300 rounded-full mx-2"></div>

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
                          <path d="M3 11l18-5v12L3 14v-3z" />
                          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                        </svg>

                        <span className="ml-1">120 Flags</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{place.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">
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
                        className="inline mr-1">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {place.district}, Sri Lanka
                    </p>
                    <p className="text-sm text-gray-600">{place.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="milestones">
            <div className="py-12 text-center text-gray-500">
              No completed milestones yet
            </div>
          </TabsContent>

          <TabsContent value="quests">
            <div className="py-12 text-center text-gray-500">
              No ongoing quests
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="md:col-span-1">
        <div className="border rounded-lg overflow-hidden">
          <div className="h-40 bg-gradient-to-r from-orange-400 to-pink-500 relative">
            <Image
              src="/environment.png"
              alt="Cover Image"
              className="w-full h-full object-cover"
              height={100}
              width={100}
            />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                <Avatar>
                  <AvatarImage
                    src={user?.image}
                    referrerPolicy="no-referrer"
                    alt={user?.name || ""}
                  />
                  <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <button className="absolute bottom-2 right-2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
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
                <path d="M2 3h20" />
                <circle cx="12" cy="12" r="8" />
              </svg>
            </button>
          </div>

          <div className="pt-12 px-4 pb-6 text-center">
            <div className="flex items-center justify-center mb-1">
              <h2 className="text-xl font-bold">{user?.name}</h2>
              <div className="bg-amber-50 text-amber-800 text-xs px-2 py-0.5 rounded-full ml-2">
                {user?.plexes ? user?.plexes : 0} PLX
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Chasing sunsets and dreams 🌅 | Digital storyteller 📷 | Making
              memories around the world 🌎
            </p>

            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="font-bold">5</div>
                <div className="text-xs text-gray-500">Memories</div>
              </div>
              <div className="text-center">
                <div className="font-bold">300</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div className="text-center">
                <div className="font-bold">1</div>
                <div className="text-xs text-gray-500">Following</div>
              </div>
            </div>
            <Link href="/account/personal-info">
              <Button className="w-full bg-[#3AAEA9] hover:bg-[#2d8c8a]">
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
                  className="mr-2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
                Edit my profile
              </Button>
            </Link>
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="mt-2 w-full hover:bg-[#2d8c8a]">
              <CrossIcon /> Add new post
            </Button>
          </div>
        </div>
      </div>

      <UploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}
