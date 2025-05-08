"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="fixed top-0 left-0 z-20 grid min-h-screen grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full bg-white">
      <div
        className="relative hidden md:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/plextrain.jpg')",
        }}>
        <div className="absolute inset-0 bg-white/80" />
        <div className="absolute inset-0  p-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex justify-center items-center  gap-2">
              {/* This is the plex logo */}
              <Image
                src="/logo.png"
                alt="Plex.lk Logo"
                width={180}
                height={0}
                priority
              />
            </div>
            <p className="mt-2 text-lg font-semibold text-primary-500 w-96 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. ingilla,
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className={cn("w-full max-w-sm", className)}>{children}</div>
      </div>
    </div>
  );
}
