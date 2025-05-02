import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! You seem to be lost</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            The location you're looking for doesn't exist or has been moved to
            another place. Let's help you find your way back.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search Locations
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold ">Popular Destinations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link
                href="/explore/sigiriya"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="h-4 w-4 text-teal-500" />
                <span>Sigiriya, Sri Lanka</span>
              </Link>
              <Link
                href="/explore/adams-peak"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="h-4 w-4 text-teal-500" />
                <span>Adam's Peak, Sri Lanka</span>
              </Link>
              <Link
                href="/explore/hiriketiya-beach"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="h-4 w-4 text-teal-500" />
                <span>Hiriketiya Beach, Sri Lanka</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
