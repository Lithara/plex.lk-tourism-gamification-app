import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100  w-full">
      <div className=" flex justify-between mx-auto w-full ">
        <div className=" mx-[16px] sm:mx-[64px] md:mx-[120px] grid sm:flex justify-between  w-full grid-cols-1 md:grid-cols-5 py-6  ">
          {/* Logo Section */}
          <div className="sm:col-span-4 md:col-span-1  flex sm:justify-start justify-center sm:items-start  md:row-span-1">
            <Link
              href="/"
              className="inline-flex w-[180px] h-auto items-start justify-start ">
              <Image
                src="/logo.png"
                alt="Plex.lk Logo"
                width={180}
                height={0}
                className="h-auto"
                priority
              />
            </Link>
          </div>

          {/* Visa Process System */}
          <div className="md:col-span-1 sm:col-span-2 sm:col-start-6 flex justify-center sm:justify-end sm:items-start sm:text-right">
            <Link href="/visa-process " className="flex items-center space-x-1">
              <h3 className="text-[14px] font-medium">Visa Process System</h3>
              <ArrowUpRight className="h-4 w-4 bg-black text-white rounded-sm" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="col-span-1 flex flex-col justify-center sm:justify-start sm:items-end text-center sm:text-right ">
            <h3 className="mb-2 text-[14px] font-medium">Navigation</h3>
            <ul className="space-y-1 text-[12px] text-gray-500 text-muted-foreground">
              <li>
                <Link
                  href="/explore"
                  className="hover:text-foreground hover:underline">
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/feed"
                  className="hover:text-foreground hover:underline">
                  Feed
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="hover:text-foreground hover:underline">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div className="col-span-1 flex flex-col justify-center sm:justify-start sm:items-end text-center sm:text-right ">
            <h3 className="mb-2 text-[14px] font-medium">Developers</h3>
            <ul className="space-y-1 text-[12px] text-gray-500 text-muted-foreground">
              <li>
                <Link
                  href="/contributors"
                  className="hover:text-foreground hover:underline">
                  Open source contributors
                </Link>
              </li>
              <li>
                <Link
                  href="/performance"
                  className="hover:text-foreground hover:underline">
                  Performance for nerds
                </Link>
              </li>
              <li>
                <Link
                  href="/api-docs"
                  className="hover:text-foreground hover:underline">
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn More About */}
          <div className="col-span-1 flex flex-col justify-center sm:justify-start sm:items-end text-center sm:text-right ">
            <h3 className="mb-2 text-[14px] font-medium">Learn More About</h3>
            <ul className="space-y-1 text-[12px] text-gray-500 text-muted-foreground">
              <li>
                <Link
                  href="/plex-points"
                  className="hover:text-foreground hover:underline">
                  Plex points
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground hover:underline">
                  Plex.lk
                </Link>
              </li>
              <li>
                <Link
                  href="/crowd-source"
                  className="hover:text-foreground hover:underline">
                  Plex.lk crowd source
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-foreground hover:underline">
                  New locations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" py-2 bg-white w-full h-auto">
        <div className="flex  flex-col items-center justify-center sm:gap-4 gap-1 md:flex-row md:justify-center">
          <p className="text-xs text-gray-600">© 2024 Plex.lk</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-xs text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
