import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function LoginSecurityPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Login</h1>

      <div className="space-y-8">
        {/* Password Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Password</h2>
            <p className="text-gray-500 text-sm">Last updated 2 days ago</p>
          </div>
          <Button variant="outline" className="text-[#3AAEA9]">
            Update
          </Button>
        </div>

        {/* Social Accounts Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Social accounts</h2>

          <div className="flex justify-between items-center border-b pb-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Google</h3>
              <p className="text-gray-500 text-sm">Connected</p>
            </div>
            <Button variant="outline" className="text-[#3AAEA9]">
              Disconnect
            </Button>
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Account</h2>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Deactivate your account
              </h3>
            </div>
            <Button variant="outline" className="text-[#3AAEA9]">
              Deactivate
            </Button>
          </div>
        </div>

        {/* Info Card */}
        <Card className="bg-white border rounded-lg overflow-hidden">
          <CardContent className="p-6">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-[#3AAEA9] mr-4 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">
                  Can I recover all my data after deactivating the account?
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
