import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex flex-col items-center justify-center w-full">
      <div className="container w-full  mx-[16px] sm:mx-[64px] md:mx-[120px] ">
        <div className="grid sm:gap-0 gap-2 w-full grid-cols-1 md:grid-cols-5 py-6 ">
          {/* Logo Section */}
          <div className="sm:col-span-4 md:col-span-1 flex sm:justify-start justify-center sm:items-start  md:row-span-1">
            <Link
              href="/"
              className="inline-flex w-[180px] h-auto items-center ">
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

      {/* <div className="mx-[16px] sm:mx-[64px] md:mx-[120px]">
        <div className="py-6 flex justify-space-between ">
          <div className="row-span-3 flex md:justify-start justify-space-between md:items-start ">
            <Link href="/" className=" p-0">
              <Image
                src="/logo.png"
                alt="Plex.lk Logo"
                width={180}
                height={0}
                priority
              />
            </Link>

            <div className="flex justify-center sm:place-items-start sm:justify-end gap-6 col-span-2 py-4 sm:py-0">
              <div className="flex items-baseline gap-1 text-sm text-gray-600">
                <Link href="/visa-process" className="hover:text-gray-900">
                  Visa Process System
                </Link>
                <ArrowUpRight
                  className="h-3 w-3 bg-black p-0"
                  color="white"
                  strokeWidth={3}
                />
              </div>
            </div>
          </div>

          <div className="sm:grid grid-cols-1 gap-8 md:grid-cols-3 flex flex-col  items-center   sm:col-span-2 sm:row-span-2 sm:place-items-end sm:text-right text-center sm:items-start ">
            <div className="md:pl-8 lg:pl-16">
              <h3 className="text-sm font-semibold text-gray-900">
                Navigation
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/explore"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                    href="/feed"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Feed
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leaderboard"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Leaderboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:pl-8 lg:pl-16">
              <h3 className="text-sm font-semibold text-gray-900">
                Developers
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/contributors"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Open source contributors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/performance"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Performance for nerds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api-docs"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:pl-8 lg:pl-16">
              <h3 className="text-sm font-semibold text-gray-900">
                Learn More About
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link
                    href="/plex-points"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Plex points
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Plex.lk
                  </Link>
                </li>
                <li>
                  <Link
                    href="/crowd-source"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    Plex.lk crowd source
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations"
                    className="text-sm text-gray-600 hover:text-gray-900">
                    New locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
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
