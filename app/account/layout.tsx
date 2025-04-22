import type React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Settings | Plex.lk",
  description: "Manage your Plex.lk account settings",
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 mx-[16px] sm:mx-[64px] md:mx-[120px] py-8">
        <div className="flex items-center text-sm mb-6">
          <Link href="/account" className="text-gray-600 hover:text-gray-900">
            Account
          </Link>
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
            className="mx-2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="font-medium">
            {/* This would be dynamically set based on the current page */}
            Login & Security
          </span>
        </div>

        {children}
      </main>
    </div>
  );
}
