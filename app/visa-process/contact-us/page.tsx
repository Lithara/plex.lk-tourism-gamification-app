"use client";

import type React from "react";

import { useState } from "react";
import { Menu, User, ArrowRight, Plane } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow py-12 mx-[16px] sm:mx-[64px] md:mx-[120px] ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-white p-8 rounded-lg border-gray-1 00 border-[1px] shadow-lg">
              <h2 className="text-3xl font-bold mb-6">
                Get In Touch<span className="text-teal-500">.</span>
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your e-mail"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleClear}
                    className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Clear
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/2  items-end relative ">
              <div className="flex flex-col ">
                <div className="relative mt-6 mb-8">
                  <div className="absolute top-20 right-20">
                    <Image
                      src="/airplane.png"
                      alt="Contact"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <h1 className="text-8xl flex flex-col justify-start items-end text-right font-bold text-teal-500 leading-tight">
                  Contact <br />
                  <span className="text-black">Us</span>
                </h1>
              </div>

              <div className="mt-8">
                <p className="text-gray-700 leading-relaxed text-justify">
                  At <span className="text-teal-500 font-medium">Plex.lk</span>,
                  our mission is to make your journey to Sri Lanka as smooth and
                  enjoyable as possible. If you have any questions, concerns, or
                  need assistance with your visa application, please don't
                  hesitate to reach out. Our dedicated support team is here to
                  provide you with the guidance you need, whether you're in the
                  early stages of planning your trip or are already on your way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
