"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleAlert, Menu, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface NavBarProps {
  variant?: "landing" | "app" | "visa";
  showVisa?: boolean;
  showSearch?: boolean;
  activeItem?: string;
}

const Navbar = ({
  variant = "app",
  showVisa = true,
  //showSearch = false,
  activeItem,
}: NavBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="static top-0 z-1000 w-full p-0 m-0 flex flex-col ">
      {/* upper bar */}
      <nav
        className={`sm:h-8 h-14 w-full bg-primary-500 flex items-center mx-0 p-0 m-auto transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className=" mx-[16px] sm:mx-[64px] md:mx-[120px]  h-6 w-full flex sm:gap-4 items-center justify-center flex-col sm:flex-row text-xs sm:text-sm font-bold text-white">
          <p>Visa processing approval system now changed! </p>
          <Link href="/visa-process" className="flex items-center gap-1">
            <p className="underline">Visit the website</p>
            <ArrowUpRight
              className="w-3 h-3 bg-white stroke-primary-500"
              strokeWidth={3}
            />
          </Link>
        </div>
      </nav>

      {/* navbar */}
      <nav
        className={` w-full bg-white flex items-center m-auto transition-all duration-300 ${
          isVisible
            ? "translate-y-0 sm:h-32 h-24"
            : "sm:-translate-y-8  -translate-y-14 py-0 sm:h-20 h-16"
        }`}>
        <div className=" mx-[16px] sm:mx-[64px] md:mx-[120px] h-full  w-full flex sm:gap-4 items-center justify-between  text-xs sm:text-sm font-bold">
          {/* left side */}
          <div>
            {/*plexlk logo */}
            <Link href="/" className="flex items-center">
              <div className="h-full sm:w-36 w-20">
                <Image
                  src="/logo.png"
                  alt="plexlk logo"
                  width={150}
                  height={100}
                  layout="responsive"
                />
              </div>
              {showVisa && (
                <Badge
                  variant="secondary"
                  className=" bg-primary-500 text-white mb-8 ">
                  Visa
                </Badge>
              )}
            </Link>
          </div>

          {/* middle  */}
          <div>
            {variant !== "landing" && variant !== "visa" && (
              <nav className="hidden sm:flex  items-center sm:gap-4 md:gap-6/  sm:text-md md:text-xl font-normal">
                <Link
                  href="/explore"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "explore"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Explore
                </Link>
                <Link
                  href="/feed"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "feed"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Feed
                </Link>
                <Link
                  href="/leaderboard"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "leaderboard"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Leaderboard
                </Link>
                <Link
                  href="/badges"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "badges"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Badges
                </Link>
              </nav>
            )}
          </div>

          {/* right side */}
          <div className="flex items-center gap-2">
            {variant !== "landing" && variant !== "visa" && (
              <div className="bg-yellow-50 p-2   w-auto flex items-center justify-center rounded-full text-amber-900 text-xs">
                <p className="flex items-center gap-1">
                  5 PLX <CircleAlert className="w-4 h-4"></CircleAlert>
                </p>
              </div>
            )}
            {variant !== "landing" && (
              <div className="p-1 border-2 border-gray-400 sm:h-12 h-10 rounded-full flex gap-2 justify-between items-center">
                <UserRound
                  className="bg-gray-400 rounded-full w-auto h-full"
                  color="white"></UserRound>

                <div>
                  <Menu className="w-auto h-full" color="black">
                    {" "}
                  </Menu>
                </div>
              </div>
            )}
            {variant === "landing" && <div></div>}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
