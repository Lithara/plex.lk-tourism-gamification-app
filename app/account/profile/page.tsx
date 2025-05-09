import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
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
              <div className="border-b pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                    <Image
                      src="/diverse-professional-profiles.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-medium">Wasath Theekshana</p>
                    <p className="text-xs text-gray-500">
                      22h • Hikkaduwa, Sri Lanka
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    <button className="p-1">
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
                    </button>
                    <button className="p-1">
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
                    </button>
                  </div>
                </div>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>

                <div className="mb-4">
                  <Image
                    src="/tropical-beach-paradise.png"
                    alt="Beach"
                    className="w-full h-64 object-cover rounded-lg"
                    width={640}
                    height={360}
                  />
                </div>

                <div className="flex items-center">
                  <button className="flex items-center mr-4">
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
                      className="mr-1">
                      <path d="M7 10v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10" />
                      <path d="M15 10 H9" />
                      <path d="M12 15v6" />
                    </svg>
                    <span>100</span>
                  </button>
                  <button className="flex items-center">
                    <Heart className="mr-1 h-5 w-5" />
                    <span>5</span>
                  </button>
                  <div className="ml-auto text-xs text-amber-600 font-medium">
                    +5 PLXS
                  </div>
                </div>
              </div>

              {/* Second Post Item */}
              <div className="border-b pb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                    <Image
                      src="/diverse-professional-profiles.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-medium">Wasath Theekshana</p>
                    <p className="text-xs text-gray-500">
                      22h • Hikkaduwa, Sri Lanka
                    </p>
                  </div>
                  <div className="ml-auto flex">
                    <button className="p-1">
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
                    </button>
                    <button className="p-1">
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
                    </button>
                  </div>
                </div>

                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>

                <div className="mb-4">
                  <Image
                    src="/golden-hour-shoreline.png"
                    alt="Sunset Beach"
                    className="w-full h-64 object-cover rounded-lg"
                    width={640}
                    height={360}
                  />
                </div>

                <div className="flex items-center">
                  <button className="flex items-center mr-4">
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
                      className="mr-1">
                      <path d="M7 10v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10" />
                      <path d="M15 10 H9" />
                      <path d="M12 15v6" />
                    </svg>
                    <span>100</span>
                  </button>
                  <button className="flex items-center">
                    <Heart className="mr-1 h-5 w-5" />
                    <span>5</span>
                  </button>
                  <div className="ml-auto text-xs text-amber-600 font-medium">
                    +5 PLXS
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="pt-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">
                    Most Popular
                  </div>
                  <button className="ml-auto">
                    <Heart className="h-5 w-5 text-[#3AAEA9]" />
                  </button>
                </div>
                <Image
                  src="/mountain-railway.png"
                  alt="Demodara Station"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-xs text-amber-600">
                    <span>4 PLXES</span>
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
                <h3 className="text-xl font-bold mb-1">Demodara Station</h3>
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
                  Ella, Sri Lanka
                </p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, conseetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis lig...
                </p>
              </div>
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
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                <Image
                  src="/connected-gazes.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <button className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-2 rounded-full">
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
              <h2 className="text-xl font-bold">Wasath Theekshana</h2>
              <div className="bg-amber-50 text-amber-800 text-xs px-2 py-0.5 rounded-full ml-2">
                5 PLX
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
          </div>
        </div>
      </div>
    </div>
  );
}
