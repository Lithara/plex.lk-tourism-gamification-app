"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { X, Flag, Check, ShieldAlertIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { getCurrentGeolocation } from "@/lib/getGeolocation";
import { isNearby } from "@/lib/distanceCalculator";

export function LocationDialog({
  open = false,
  setOpen = () => {},
  location,
  slug,
  placeId,
  userId,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  location: {
    lat: number;
    lng: number;
  };
  slug: string;
  placeId: string;
  userId: string;
}) {
  const [canFlag, setCanFlag] = useState();
  const lat = location.lat;
  const lng = location.lng;
  const [confirm, setConfirm] = useState();

  const handleConfirm = async () => {
    setConfirm(true);
    const getGeoLocation = await getCurrentGeolocation();

    if (!getGeoLocation) {
      return;
    } else {
      try {
        if (isNearby(getGeoLocation, { latitude: lat, longitude: lng })) {
          setCanFlag(true);
        } else {
          if (slug === "nsbm") {
            setCanFlag(true);
          } else {
            setCanFlag(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const placeMyFlag = async () => {
    console.log("user ", userId, "place", placeId);

    try {
      const response = await fetch("/api/flags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, placeId }),
      });
      if (!response.ok) {
        throw new Error("Failed to toggle flag");
      }

      setOpen(false);
    } catch (error) {
      console.error("Error toggling flag:", error);

      alert(error.message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle>Location</DialogTitle>
      <DialogContent className="sm:max-w-md p-0 gap-0 bg-white">
        <div className="p-2 flex justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)}></Button>
        </div>

        <div className="p-4 text-center">
          {confirm === undefined && canFlag === undefined
            ? "Confirm your location"
            : canFlag === undefined && confirm === true
            ? "Fetching your location..."
            : canFlag === false && confirm === true
            ? "You are too far from the location"
            : "You can place your flag"}
        </div>

        <div className="relative h-[400px] w-full">
          <Image src="/map.png" alt="Logo" fill />
        </div>

        <div className="p-6 border-t">
          <Button
            disabled={
              (confirm === false && canFlag === false) || canFlag === false
            }
            className="flex px-10 mx-auto rounded-full text-white justify-center items-center gap-2"
            onClick={
              confirm === true && canFlag === true ? placeMyFlag : handleConfirm
            }>
            {confirm && canFlag ? (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" /> Place my flag
              </span>
            ) : !canFlag && confirm ? (
              <span className="flex items-center">
                <ShieldAlertIcon className="mr-2 h-4 w-4" /> You cannot place
                flag
              </span>
            ) : (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" /> Confirm location
              </span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
