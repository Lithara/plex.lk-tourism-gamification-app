"use client";

import type React from "react";

import { useState, useRef } from "react";
import { X, Upload, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (data: {
    files: File[];
    caption: string;
    location: string;
  }) => void;
}

export default function UploadModal({
  isOpen,
  onClose,
  onUpload,
}: UploadModalProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleUploadClick = () => {
    onUpload({ files, caption, location });
    resetForm();
  };

  const resetForm = () => {
    setFiles([]);
    setCaption("");
    setLocation("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogTitle hidden>Upload Model</DialogTitle>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden bg-white">
        <div className="flex justify-end p-2">
          <button
            onClick={handleClose}
            className="rounded-full p-1 hover:bg-gray-100 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 pt-0">
          <div
            className="border-2 border-dashed border-gray-300 rounded-md p-8 mb-4 flex flex-col items-center justify-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={triggerFileInput}>
            {files.length > 0 ? (
              <div className="w-full">
                {files[0].type.startsWith("image/") ? (
                  <Image
                    src={URL.createObjectURL(files[0]) || "/placeholder.svg"}
                    alt="Preview"
                    width={200}
                    height={200}
                    className="max-h-64 mx-auto object-contain"
                  />
                ) : (
                  <div className="text-center py-8">
                    <p className="font-medium">{files[0].name}</p>
                    <p className="text-sm text-gray-500">
                      {(files[0].size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="bg-gray-100 p-3 rounded-full mb-2">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 10V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V10M12 14V17M19 12H5C3.89543 12 3 12.8954 3 14V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V14C21 12.8954 20.1046 12 19 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-teal-500 font-medium">Click here</span>{" "}
                  to upload or drop files here
                </div>
              </>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*,video/*"
            />
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Input
                placeholder="Add caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value.slice(0, 200))}
                className="pr-16"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                {caption.length}/200
              </div>
            </div>

            <div className="relative">
              <Input
                placeholder="Add location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pr-10"
              />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <Button
            className="w-full mt-6 bg-teal-500 hover:bg-teal-600 text-white"
            onClick={handleUploadClick}
            disabled={files.length === 0}>
            <Upload className="mr-2 h-4 w-4" /> Upload post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
