"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleAlert, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";

interface NavBarProps {
  variant?: "landing" | "app" | "visa";
  showVisa?: boolean;
  showSearch?: boolean;
  activeItem?: string;
}

const Navbar = ({
  variant = "app",
  showVisa = false,

  activeItem,
}: NavBarProps) => {
  // get navigation
  const navigation = usePathname();
  console.log("navigation", navigation);

  // if navigation == "/visa-process" then set variant to visa
  if (
    navigation === "/visa-process" ||
    navigation === "/visa-process/apply" ||
    navigation === "/visa-process/contact-us"
  ) {
    showVisa = true;
    variant = "visa";
  } else {
    showVisa = false;
    variant = "app";
  }

  // get user in session

  const session = useSession();

  const user = session?.data?.user;

  console.log("user", user);

  return (
    <header className="static border-b-2 top-0 z-1000 w-full p-0 m-0 flex flex-col ">
      {/* upper bar */}
      <nav className="sm:h-8 h-14 w-full bg-primary-500 flex items-center mx-0 p-0 m-auto transition-transform duration-300 ">
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
        className="sm:h-24 h-14 w-full bg-white flex items-center m-auto transition-all duration-300 ${
          ">
        <div className=" mx-[16px] sm:mx-[64px] md:mx-[120px] h-full  w-full flex sm:gap-4 items-center justify-between  text-xs sm:text-sm font-bold">
          {/* left side */}

          <div>
            {/*plexlk logo */}
            <Link href="/" className="flex items-center">
              <div className="h-full sm:w-36 w-20">
                <Image
                  src="/logo.png"
                  alt="plexlk logo"
                  width={132}
                  height={26.94}
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

          <div className="hidden sm:flex items-center gap-4 md:gap-6 font-normal sm:text-[16px] text-[14px] font-bold text-gray-500">
            {variant !== "visa" && (
              <nav className="hidden sm:flex  items-center sm:gap-6 md:gap-10 font-normal sm:text-[16px] text-[14px]  text-gray-500">
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
              </nav>
            )}

            {variant === "visa" && (
              <nav className="hidden sm:flex  items-center sm:gap-8 md:gap-10 font-normal sm:text-[16px] text-[14px]  text-gray-500">
                <Link
                  href="/visa-process/apply"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "visa-process"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Apply Now
                </Link>
                <Link
                  href="/visa-process/contact-us"
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeItem === "visa-process"
                      ? "text-foreground font-medium"
                      : "text-foreground/60"
                  )}>
                  Contact Us
                </Link>
              </nav>
            )}
          </div>

          {/* right side */}
          {user && (
            <div className="flex items-center gap-2">
              {variant !== "visa" && (
                <div className="bg-yellow-50 p-2   w-auto flex items-center justify-center rounded-full text-amber-900 text-xs">
                  <p className="flex items-center gap-1">
                    {user.plxCount} PLX{" "}
                    <CircleAlert className="w-4 h-4"></CircleAlert>
                  </p>
                </div>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="p-1 border-2  border-gray-400 sm:border-none sm:h-12 h-10 rounded-full flex gap-2 justify-between items-center">
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name || ""} />
                    </Avatar>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="w-40 flex flex-col items-center bg-white text-center"
                  align="end">
                  <div className="sm:hidden">
                    <DropdownMenuItem>
                      <Link href="/explore">Explore</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/feed">Feed</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/leaderboard">Leaderboard</Link>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/account">
                      <span className="font-bold text-md">Account</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Button
                      onClick={() => signOut()}
                      variant="ghost"
                      className="w-full text-primary-500">
                      <span className="font-bold text-md">Sign Out</span>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {!user && (
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/authentication/sign-in">
                <Button variant="ghost" className="h-10 px-4">
                  Sign In
                </Button>
              </Link>
              <Link href="/authentication/sign-up">
                <Button variant="outline" className="h-10 px-4 rounded-full">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
