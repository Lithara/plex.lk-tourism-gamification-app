import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | Plex.lk",
  description: "See the latest updates from travelers on Plex.lk",
};

export default function FeedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
