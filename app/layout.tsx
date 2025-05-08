import type { Metadata } from "next";
import ClientSessionProvider from "@/components/ClientSessionProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  title: "Plex.lk",
  description: "Explore Sri Lanka with Plex.lk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} flex flex-col items-center justify-center min-h-screen`}>
        <ClientSessionProvider>
          <Navbar />
          <div className="w-full min-h-screen overflow-hidden">{children}</div>
          <Footer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
