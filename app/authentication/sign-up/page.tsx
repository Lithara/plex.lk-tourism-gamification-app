"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/app/action/sign-up";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthLayout } from "../auth-layout";
import Image from "next/image";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      // Check if passwords match whenever either password field changes
      if (name === "password" || name === "confirmPassword") {
        const otherField = name === "password" ? "confirmPassword" : "password";
        // Only validate if both fields have values
        if (newData[name] && newData[otherField]) {
          setPasswordsMatch(newData.password === newData.confirmPassword);
        } else {
          setPasswordsMatch(true); // Reset validation if either field is empty
        }
      }

      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null); // Reset error state

    const result = await signUp(formData);
    if (!passwordsMatch) {
      setIsLoading(false);
      return;
    }
    if (result?.error) {
      // set error message based on the error response
      if (result.error.email) {
        setError(result.error.email[0]);
      } else if (result.error.password) {
        setError(result.error.password[0]);
      } else if (result.error.general) {
        setError(result.error.general[0]);
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    } else {
      // Redirect to the home page or any other page after successful sign-up
      setIsLoading(false);
      router.push("/");

      // router.push("/authentication/sign-in");
    }
    setIsLoading(false);
  };

  async function handleGoogleSignIn() {
    const result = await signIn("google", { redirect: false });
    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  }

  return (
    <AuthLayout>
      <div className="flex flex-col items-center  gap-2 md:hidden mb-8">
        {/* This is the plex logo */}
        <Image
          src="/logo.png"
          alt="Plex.lk Logo"
          width={150}
          height={0}
          priority
        />
        <p className="mt-2 text-md font-semibold text-primary-500  text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. ingilla,
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Sign Up</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4">
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              required>
              <option value="" disabled>
                Select Your Country
              </option>
              <option value="LK">Sri Lanka</option>
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="IN">India</option>
              <option value="AU">Australia</option>
              <option value="CA">Canada</option>
              <option value="SG">Singapore</option>
              {/* Add more countries as needed */}
            </select>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
              {formData.confirmPassword && !passwordsMatch && (
                <p className="mt-1 text-sm text-red-600">
                  Passwords do not match
                </p>
              )}
            </div>
            {/* Display error message if any */}
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}

            <Button
              disabled={isLoading || !passwordsMatch}
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600">
              Sign Up
            </Button>
          </form>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={handleGoogleSignIn}>
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link
            href="sign-in"
            className="text-primary-500 hover:text-primary-600">
            Sign In
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}
