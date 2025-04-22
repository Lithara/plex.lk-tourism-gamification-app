import Image from "next/image";
import Link from "next/link";
import {
  Search,
  MapPin,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal,
  X,
  Filter,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeedPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    location: string;
    time: string;
  };
  content: string;
  hashtags: string[];
  image: string;
  likes: number;
  comments: number;
  plexes: number;
}

export default function FeedPage() {
  const feedPosts: FeedPost[] = [
    {
      id: 1,
      author: {
        name: "Rockland Silva",
        avatar: "/jane-doe.png",
        location: "Mirissa, Sri Lanka",
        time: "23h",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.",
      hashtags: ["hikka", "#beaches", "#goldenhour", "#srilanka"],
      image: "/beach-woman.png",
      likes: 100,
      comments: 5,
      plexes: 5,
    },
    {
      id: 2,
      author: {
        name: "Jane Eyre Fernando",
        avatar: "/jane-doe.png",
        location: "Sigiriya, Sri Lanka",
        time: "12h",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.",
      hashtags: ["#sigiriya", "#srilanka", "#travelwithfriends", "#asiatrip"],
      image: "/sigiriya-group.png",
      likes: 100,
      comments: 5,
      plexes: 5,
    },
    {
      id: 3,
      author: {
        name: "Nolimit Gustavo",
        avatar: "/jane-doe.png",
        location: "Trincomalee, Sri Lanka",
        time: "1d",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.",
      hashtags: ["#surfing", "#srilanka", "#beachvibes", "#easternprovince"],
      image: "/surfing-couple.jpg",
      likes: 100,
      comments: 5,
      plexes: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] pb-6">
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search a Quest, Profile or Location"
              className="pl-4 pr-12 py-6 rounded-full border border-gray-300"
            />
            <Button
              size="lg"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full text-white bg-primary-500 hover:bg-primary-600">
              <Search className="h-4 w-4" />
              <span className="">Search</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white">
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
      </div>

      {/* Main Content */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="lg:col-span-2">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/user.png" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1px-4 py-2 text-gray-500 text-[18px]">
                  Sign in to share your milestone
                </div>
                <Button variant="ghost" size="icon" className="text-gray-400">
                  <Image
                    src="/imageplus.png"
                    alt="share"
                    width={20}
                    height={20}
                  />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <Tabs defaultValue="completed" className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <TabsList>
                    <TabsTrigger value="completed" className="text-sm">
                      Completed milestones
                    </TabsTrigger>
                    <TabsTrigger value="recent" className="text-sm">
                      Recent milestones
                    </TabsTrigger>
                  </TabsList>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-500 text-xs">
                    Clear
                  </Button>
                </div>
                <TabsContent value="completed">
                  {/* Feed Posts */}
                  <div className="space-y-6">
                    {feedPosts.map((post) => (
                      <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden">
                        {/* Post Header */}
                        <div className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={post.author.avatar || "/placeholder.svg"}
                                alt={post.author.name}
                              />
                              <AvatarFallback>
                                {post.author.name[0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {post.author.name}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-6 rounded-full text-xs px-2 py-0 text-primary-500 border-primary-500">
                                  Follow
                                </Button>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-500">
                                <span>{post.author.time}</span>
                                <span>•</span>
                                <MapPin className="h-3 w-3" />
                                <span>{post.author.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="px-4 pb-3">
                          <p className="text-sm text-gray-700 mb-2">
                            {post.content}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {post.hashtags.map((tag, index) => (
                              <span
                                key={index}
                                className="text-xs text-primary-500">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Post Image */}
                        <div className="w-full">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post image"
                            width={800}
                            height={500}
                            className="w-full object-cover"
                          />
                        </div>

                        {/* Post Actions */}
                        <div className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0">
                                <ThumbsUp className="h-4 w-4" />
                              </Button>
                              <span className="text-sm">{post.likes}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0">
                                <MessageCircle className="h-4 w-4" />
                              </Button>
                              <span className="text-sm">{post.comments}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-xs text-orange-500 font-medium">
                              +{post.plexes} PLXES
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Show More Button */}
                    <div className="flex justify-center">
                      <Button
                        variant="default"
                        size={"lg"}
                        className="rounded-full text-white text-[16px]">
                        Show More
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
                  </div>
                </TabsContent>
                <TabsContent value="recent">
                  <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                    <p className="text-gray-500 mb-4">
                      Sign in to view your friends milestones
                    </p>
                    <Button variant="outline" className="rounded-full">
                      Sign in
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar - Empty for now, can be filled with content later */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
}
