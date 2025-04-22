import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore | Plex.lk",
  description: "Discover amazing places in Sri Lanka with Plex.lk",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
