"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { User, Info, Shield, Eye } from "lucide-react";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const session = useSession();
  const user = session?.data?.user;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Account</h1>
      <p className="text-gray-600 mb-8">
        {user?.name}, {user?.email}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/account/profile">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <User className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Profile</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/personal-info">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Info className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Personal Info</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/login-security">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Login & security</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/privacy-sharing">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Eye className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Privacy & sharing</h3>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna.
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/explore"
          className="bg-[#3AAEA9] text-white px-6 py-3 rounded-full flex items-center">
          Back to explore
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
