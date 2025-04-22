import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeaderboardUser {
  rank: number;
  change: number;
  name: string;
  avatar: string;
  country: string;
  plx: number;
  flags: number;
  lastCheckpoint: string;
  highlighted?: boolean;
}

export default function LeaderboardPage() {
  const topUsers: LeaderboardUser[] = [
    {
      rank: 1,
      change: 0,
      name: "Jane Eyre",
      avatar: "/users/jane-eyre.png",
      country: "uk",
      plx: 1000,
      flags: 220,
      lastCheckpoint: "Ella, Sri Lanka",
    },
    {
      rank: 2,
      change: 0,
      name: "Ruwan Ranjan",
      avatar: "/users/ruwan-ranjan.png",
      country: "lk",
      plx: 960,
      flags: 215,
      lastCheckpoint: "Ella, Sri Lanka",
    },
    {
      rank: 3,
      change: 0,
      name: "Miguel Nigel",
      avatar: "/users/miguel-nigel.png",
      country: "us",
      plx: 955,
      flags: 218,
      lastCheckpoint: "Ella, Sri Lanka",
    },
  ];

  const leaderboardUsers: LeaderboardUser[] = [
    {
      rank: 4,
      change: 40,
      name: "John Baker",
      avatar: "/users/john-baker.png",
      country: "uk",
      plx: 800,
      flags: 200,
      lastCheckpoint: "Ella, Sri Lanka",
    },
    {
      rank: 5,
      change: 20,
      name: "Alex Harper",
      avatar: "/users/alex-harper.png",
      country: "us",
      plx: 790,
      flags: 205,
      lastCheckpoint: "Sigiriya, Sri Lanka",
    },
    {
      rank: 6,
      change: 50,
      name: "Jordan Lee",
      avatar: "/users/jordan-lee.png",
      country: "fr",
      plx: 750,
      flags: 199,
      lastCheckpoint: "Galle, Sri Lanka",
    },
    {
      rank: 7,
      change: 20,
      name: "Taylor Quinn",
      avatar: "/users/taylor-quinn.png",
      country: "de",
      plx: 748,
      flags: 205,
      lastCheckpoint: "Nuwara Eliya, Sri Lanka",
    },
    {
      rank: 8,
      change: 60,
      name: "Morgan Hayes",
      avatar: "/users/morgan-hayes.png",
      country: "fr",
      plx: 747,
      flags: 194,
      lastCheckpoint: "Dambulla, Sri Lanka",
    },
    {
      rank: 9,
      change: 60,
      name: "Casey Rivers",
      avatar: "/users/casey-rivers.png",
      country: "uk",
      plx: 700,
      flags: 190,
      lastCheckpoint: "Kandy, Sri Lanka",
    },
    {
      rank: 10,
      change: 40,
      name: "Riley Brooks",
      avatar: "/users/riley-brooks.png",
      country: "ca",
      plx: 680,
      flags: 180,
      lastCheckpoint: "Ella, Sri Lanka",
    },
    {
      rank: 11,
      change: 30,
      name: "Jamie Parker",
      avatar: "/users/jamie-parker.png",
      country: "sg",
      plx: 650,
      flags: 184,
      lastCheckpoint: "Trincomalee, Sri Lanka",
    },
    {
      rank: 12,
      change: 40,
      name: "Avery Taylor",
      avatar: "/users/avery-taylor.png",
      country: "au",
      plx: 640,
      flags: 180,
      lastCheckpoint: "Ella, Sri Lanka",
    },
    {
      rank: 13,
      change: 30,
      name: "Cameron Reed",
      avatar: "/users/cameron-reed.png",
      country: "it",
      plx: 600,
      flags: 159,
      lastCheckpoint: "Jaffna, Sri Lanka",
    },
    {
      rank: 558,
      change: 40,
      name: "Hannah Baker",
      avatar: "/jane-doe.png",
      country: "uk",
      plx: 5,
      flags: 1,
      lastCheckpoint: "Ella, Sri Lanka",
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-8  mx-[16px] sm:mx-[64px] md:mx-[120px]">
        {/* Top 3 Users */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8  my-16">
          {/* 2nd Place */}
          <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-primary-500">
                2
              </div>
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/diverse-group-city.png"
                  alt="Ruwan Ranjan"
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/colorful-pennant-banner.png"
                  alt="Sri Lanka"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                <Image
                  src="/flag.png"
                  alt="Flag"
                  width={12}
                  height={12}
                  className="inline-block mr-1"
                />{" "}
                215 Flags
              </p>
              <h3 className="font-bold">Ruwan Ranjan</h3>
              <p className="text-orange-500 font-bold">960 PLX</p>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <Crown className="w-10 h-10 text-primary-500" />
              </div>
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/diverse-group-city.png"
                  alt="Jane Eyre"
                  width={144}
                  height={144}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/colorful-pennant-banner.png"
                  alt="UK"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                <Image
                  src="/flag.png"
                  alt="Flag"
                  width={12}
                  height={12}
                  className="inline-block mr-1"
                />{" "}
                220 Flags
              </p>
              <h3 className="font-bold">Jane Eyre</h3>
              <p className="text-orange-500 font-bold">1000 PLX</p>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 flex flex-col items-center">
            <div className="relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-primary-500">
                3
              </div>
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/diverse-group-city.png"
                  alt="Miguel Nigel"
                  width={112}
                  height={112}
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/colorful-pennant-banner.png"
                  alt="US"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                <Image
                  src="/flag.png"
                  alt="Flag"
                  width={12}
                  height={12}
                  className="inline-block mr-1"
                />{" "}
                218 Flags
              </p>
              <h3 className="font-bold">Miguel Nigel</h3>
              <p className="text-orange-500 font-bold">955 PLX</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for a Plexer"
              className="pl-4 pr-12 py-2 rounded-full border border-gray-300"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-primary-500 hover:bg-primary-600">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {leaderboardUsers.map((user) => (
            <div
              key={user.rank}
              className={`border-b border-gray-100 ${
                user.highlighted ? "bg-primary-50" : ""
              }`}>
              <div className="flex items-center py-4 px-4">
                <div className="w-16 text-center">
                  <div className="text-lg font-bold">{user.rank}</div>
                  <div className="text-xs text-primary-500">+{user.change}</div>
                </div>

                <div className="flex items-center gap-3 w-48">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={
                          user.avatar ||
                          "/placeholder.svg?height=40&width=40&query=person"
                        }
                        alt={user.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                      <Image
                        src={`/placeholder.svg?height=8&width=8&query=flag`}
                        alt={user.country}
                        width={8}
                        height={8}
                      />
                    </div>
                  </div>
                  <div className="font-medium">{user.name}</div>
                </div>

                <div className="flex-1 flex items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <span className="text-xs mr-1">Last Checkpoint</span>
                    <MapPin className="h-3 w-3 text-primary-500 mr-1" />
                    {user.lastCheckpoint}
                  </div>
                </div>

                <div className="w-24 text-center">
                  <Link
                    href="#"
                    className="text-sm text-gray-500 hover:text-primary-500">
                    Badges
                  </Link>
                </div>

                <div className="w-24 text-right">
                  <div className="text-xs text-gray-500">
                    <Image
                      src="/flag.png"
                      alt="Flag"
                      width={12}
                      height={12}
                      className="inline-block mr-1"
                    />{" "}
                    {user.flags} Flags
                  </div>
                </div>

                <div className="w-24 text-right">
                  <div className="text-sm font-bold text-orange-500">
                    {user.plx} PLEXES
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
