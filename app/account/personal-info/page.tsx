"use client";

import { NameChangeDialog } from "@/components/name-change-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PersonalInfoPage() {
  const session = useSession();

  const [user, setUser] = useState();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNameUpdated = (newName: string) => {
    setUser((prev) => ({ ...prev, name: newName }));
  };

  useEffect(() => {
    if (session.data) {
      setUser(session.data.user);
    }
  }, [session.data]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Personal Info</h1>

      <div className="space-y-8">
        {/* Full Name Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Full Name</h2>
            <p className="text-gray-700">{user?.name}</p>
          </div>
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant="outline"
            className="text-[#3AAEA9]">
            Edit
          </Button>
        </div>

        {/* Email Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Email</h2>
            <p className="text-gray-700">{user?.email}</p>
          </div>
          {/* <Button variant="outline" className="text-[#3AAEA9]">
            Edit
          </Button> */}
        </div>

        {/* Phone Number Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Phone Number</h2>
            <p className="text-gray-700">+94 77 123 4567</p>
          </div>
          {/* <Button variant="outline" className="text-[#3AAEA9]">
            Edit
          </Button> */}
        </div>

        {/* Country Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Country</h2>
            <p className="text-gray-700">Sri Lanka</p>
          </div>
          {/* <Button variant="outline" className="text-[#3AAEA9]">
            Edit
          </Button> */}
        </div>

        {/* Emergency Contact Section */}
        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Emergency Contact</h2>
            <p className="text-gray-700">+94 77 123 4567</p>
          </div>
          {/* <Button variant="outline" className="text-[#3AAEA9]">
            Edit
          </Button> */}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex">
                <User className="h-6 w-6 text-[#3AAEA9] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">
                    Why I cant' change my email after I edited it?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-[#3AAEA9] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">
                    Why I need to add an emergency contact?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <NameChangeDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentName={user?.name}
        onNameUpdated={handleNameUpdated}
      />
    </div>
  );
}
