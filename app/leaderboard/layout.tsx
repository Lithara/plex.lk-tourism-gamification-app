import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leaderboard | Plex.lk",
  description: "See the top travelers on Plex.lk",
};

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
