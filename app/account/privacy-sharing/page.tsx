import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

export default function PrivacySharingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Privacy & Sharing</h1>

      <div className="space-y-8">
        {/* Request Data Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1 flex items-center">
              Request your personal data
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
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Auris.
            </p>
          </div>
        </div>

        {/* Delete Account Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1 flex items-center">
              Delete your account
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
            </h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Auris.
            </p>
          </div>
        </div>

        {/* Info Card */}
        <Card className="bg-white border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex">
              <Eye className="h-6 w-6 text-[#3AAEA9] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">
                  We are committed to your privacy!
                </h3>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
