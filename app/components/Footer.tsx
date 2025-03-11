import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex flex-col place-content-center w-full">
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px]">
        <div className="py-6 md:grid grid-flow-col grid-rows-3 flex flex-col ">
          <div className="row-span-3 flex md:justify-start justify-center md:items-start">
            <Link href="/" className=" p-0">
              <Image
                src="/logo.png"
                alt="Plex.lk Logo"
                width={180}
                height={0}
                priority
              />
            </Link>
          </div>
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
