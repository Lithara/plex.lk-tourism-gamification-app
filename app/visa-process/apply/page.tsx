"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

export default function VisaApplication() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalSteps = 8;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowSuccess(true);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] min-h-screen">
      {/* Progress Steps */}
      <div className=" w-full  py-8">
        <div className="w-full flex items-center justify-center">
          <div className="flex items-center w-full max-w-3xl">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <div key={step} className="flex-1 flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center text-white font-bold ${
                    currentStep >= step ? "bg-primary-600" : "bg-gray-800"
                  }`}>
                  {step}
                </div>
                <div className="text-xs mt-2 text-center">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Passport Information"}
                  {step === 3 && "Child Information"}
                  {step === 4 && "Travel Information"}
                  {step === 5 && "Contact Information"}
                  {step === 6 && "Declarations"}
                  {step === 7 && "Document Upload"}
                  {step === 8 && "Review & Submit"}
                </div>
                {step < 9 && <div className="h-0.5 w-full bg-black "></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full mx-auto">
          <Card className="shadow-md">
            {currentStep === 1 && <PersonalInformationForm />}
            {currentStep === 2 && <PassportInformationForm />}
            {currentStep === 3 && <ChildInformationForm />}
            {currentStep === 4 && <TravelInformationForm />}
            {currentStep === 5 && <ContactInformationForm />}
            {currentStep === 6 && <DeclarationsForm />}
            {currentStep === 7 && <DocumentUploadForm />}
            {currentStep === 8 && <ReviewSubmitForm />}

            <div className="p-6 flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 1}>
                Previous
              </Button>
              <Button
                onClick={goToNextStep}
                className="bg-gray-800 hover:bg-gray-700">
                {currentStep === totalSteps ? "Submit" : "Next"}
                {currentStep !== totalSteps && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                )}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <div className="h-16 w-16 rounded-full border-2 border-primary-500 flex items-center justify-center text-primary-500">
                <Check className="h-8 w-8" />
              </div>
            </div>
            <DialogTitle className="text-xl font-bold">Success!</DialogTitle>
            <DialogDescription className="text-center mt-2">
              Your VISA application has been submitted successfully. You will be
              contacted through e-mail for further details.
            </DialogDescription>
          </div>
          <DialogFooter>
            <Button
              className="w-full bg-gray-800 hover:bg-gray-700"
              onClick={() => setShowSuccess(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PersonalInformationForm() {
  return (
    <div className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Personal Information
        </CardTitle>
        <p className="text-sm text-gray-500">
          Please fill out the information below.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Surname / Family Name</Label>
            <Input placeholder="Enter your surname / family name" />
          </div>
          <div>
            <Label>Other / Given Names</Label>
            <Input placeholder="Enter your other / given names" />
          </div>
        </div>

        <div>
          <Label>Title</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="mr" />
              <label htmlFor="mr" className="text-sm">
                Mr.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mrs" />
              <label htmlFor="mrs" className="text-sm">
                Mrs.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="miss" />
              <label htmlFor="miss" className="text-sm">
                Miss
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ms" />
              <label htmlFor="ms" className="text-sm">
                Ms.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rev" />
              <label htmlFor="rev" className="text-sm">
                Rev.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="dr" />
              <label htmlFor="dr" className="text-sm">
                Dr.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="master" />
              <label htmlFor="master" className="text-sm">
                Master
              </label>
            </div>
          </div>
        </div>

        <div>
          <Label>Civil Status</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="single" />
              <label htmlFor="single" className="text-sm">
                Single
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="married" />
              <label htmlFor="married" className="text-sm">
                Married
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="divorced" />
              <label htmlFor="divorced" className="text-sm">
                Divorced
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="widowed" />
              <label htmlFor="widowed" className="text-sm">
                Widowed
              </label>
            </div>
          </div>
        </div>

        <div>
          <Label>Date of Birth</Label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <Input placeholder="Year" />
            <Input placeholder="Month" />
            <Input placeholder="Date" />
          </div>
        </div>

        <div>
          <Label>Gender</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="male" />
              <label htmlFor="male" className="text-sm">
                Male
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="female" />
              <label htmlFor="female" className="text-sm">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Nationality</Label>
            <Input placeholder="Enter your nationality" />
          </div>
          <div>
            <Label>Country of Birth</Label>
            <Input placeholder="Enter your country of birth" />
          </div>
        </div>

        <div>
          <Label>Occupation</Label>
          <Input placeholder="Enter your occupation" />
        </div>
      </CardContent>
    </div>
  );
}

function PassportInformationForm() {
  return (
    <div className="mx-[120px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Passport Information
        </CardTitle>
        <p className="text-sm text-gray-500">
          Please fill out the information below.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Passport Number</Label>
            <Input placeholder="Enter your passport number" />
          </div>
          <div>
            <Label>Place of Issue</Label>
            <Input placeholder="Enter the place of issue of your passport" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Passport Issued Date</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Input placeholder="Year" />
              <Input placeholder="Month" />
              <Input placeholder="Date" />
            </div>
          </div>
          <div>
            <Label>Passport Expiry Date</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Input placeholder="Year" />
              <Input placeholder="Month" />
              <Input placeholder="Date" />
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
}

function ChildInformationForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Child Information</CardTitle>
        <p className="text-sm text-gray-500">
          Please fill out the information below. If this section does not apply
          to you, please skip to the next section.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <Label>Number of Children</Label>
          <Input placeholder="Enter the number of children" className="mt-2" />
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold mb-4">Child 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Surname / Family Name</Label>
              <Input placeholder="Enter the surname / family name" />
            </div>
            <div>
              <Label>Other / Given Names</Label>
              <Input placeholder="Enter other / given names" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label>Date of Birth</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <Input placeholder="Year" />
                <Input placeholder="Month" />
                <Input placeholder="Date" />
              </div>
            </div>
            <div>
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="child1-male" />
                  <label htmlFor="child1-male" className="text-sm">
                    Male
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="child1-female" />
                  <label htmlFor="child1-female" className="text-sm">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Label>Relationship</Label>
            <Input placeholder="Enter the relationship" className="mt-2" />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold mb-4">Child 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Surname / Family Name</Label>
              <Input placeholder="Enter the surname / family name" />
            </div>
            <div>
              <Label>Other / Given Names</Label>
              <Input placeholder="Enter other / given names" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label>Date of Birth</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <Input placeholder="Year" />
                <Input placeholder="Month" />
                <Input placeholder="Date" />
              </div>
            </div>
            <div>
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="child2-male" />
                  <label htmlFor="child2-male" className="text-sm">
                    Male
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="child2-female" />
                  <label htmlFor="child2-female" className="text-sm">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Label>Relationship</Label>
            <Input placeholder="Enter the relationship" className="mt-2" />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function TravelInformationForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Travel Information</CardTitle>
        <p className="text-sm text-gray-500">
          Please fill out the information below.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label>Intended Arrival Date</Label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <Input placeholder="Year" />
            <Input placeholder="Month" />
            <Input placeholder="Date" />
          </div>
        </div>

        <div>
          <Label>Purpose of Visit</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="visiting" />
              <label htmlFor="visiting" className="text-sm">
                Visiting friends and relatives.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sightseeing" />
              <label htmlFor="sightseeing" className="text-sm">
                Sightseeing or Holidaying.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="medical" />
              <label htmlFor="medical" className="text-sm">
                Medical treatment.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="participation" />
              <label htmlFor="participation" className="text-sm">
                Participation sports, cultural performance.
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Port of Departure</Label>
            <Input
              placeholder="Enter your port of departure"
              className="mt-2"
            />
          </div>
          <div>
            <Label>Flight Number & Name of Airline / Vessel</Label>
            <Input
              placeholder="Enter your flight number and name of vessel"
              className="mt-2"
            />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function ContactInformationForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Contact Information
        </CardTitle>
        <p className="text-sm text-gray-500">
          Please fill out the information below.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-bold mb-2">Address in the Country & Domicile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Number & Street</Label>
              <Input placeholder="Enter your number and street" />
            </div>
            <div>
              <Label>City</Label>
              <Input placeholder="Enter your city" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label>State</Label>
              <Input placeholder="Enter your state" />
            </div>
            <div>
              <Label>Zip / Postal Code</Label>
              <Input placeholder="Enter your zip / postal code" />
            </div>
          </div>

          <div className="mt-4">
            <Label>Country</Label>
            <Input placeholder="Enter the country" />
          </div>
        </div>

        <div className="border-t pt-4">
          <Label>Address in Sri Lanka</Label>
          <Input
            placeholder="Enter your address in Sri Lanka"
            className="mt-2"
          />
        </div>

        <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>E-mail Address</Label>
            <Input placeholder="Enter your e-mail address" />
          </div>
          <div>
            <Label>Telephone Number</Label>
            <Input placeholder="Enter your telephone number" />
          </div>
          <div>
            <Label>Mobile Number</Label>
            <Input placeholder="Enter your mobile number" />
          </div>
          <div>
            <Label>Fax Number</Label>
            <Input placeholder="Enter your fax number" />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function DeclarationsForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Declarations</CardTitle>
        <p className="text-sm text-gray-500">
          Please confirm the declarations below.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="flex justify-between items-center">
              <Label>Do you have a valid resident VISA?</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="resident-yes" />
                  <label htmlFor="resident-yes" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="resident-no" />
                  <label htmlFor="resident-no" className="text-sm">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label>Are you currently in Sri Lanka and possess an ETA</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="eta-yes" />
                  <label htmlFor="eta-yes" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="eta-no" />
                  <label htmlFor="eta-no" className="text-sm">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label>Do you have a valid multiple entry VISA?</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="multiple-yes" />
                  <label htmlFor="multiple-yes" className="text-sm">
                    Yes
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="multiple-no" />
                  <label htmlFor="multiple-no" className="text-sm">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}

function DocumentUploadForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Document Upload</CardTitle>
        <p className="text-sm text-gray-500">
          Please upload the required documents below.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <h3 className="font-bold">Passport Photo</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload a clear photo of your passport's information page.
          </p>
          <Button
            variant="outline"
            className="w-full h-32 border-dashed flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            <span className="mt-2 text-sm text-gray-500">
              Drag & Drop files here or click to select file(s)
            </span>
          </Button>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold">Recent Portrait Photos</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload two recent portrait photos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">
                Upload Portrait Photo 1
              </p>
              <Button
                variant="outline"
                className="w-full h-32 border-dashed flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                <span className="mt-2 text-sm text-gray-500">
                  Drag & Drop files here or click to select file(s)
                </span>
              </Button>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">
                Upload Portrait Photo 2
              </p>
              <Button
                variant="outline"
                className="w-full h-32 border-dashed flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                <span className="mt-2 text-sm text-gray-500">
                  Drag & Drop files here or click to select file(s)
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold">Return Air Ticket</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload a copy of your return air ticket.
          </p>
          <Button
            variant="outline"
            className="w-full h-32 border-dashed flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            <span className="mt-2 text-sm text-gray-500">
              Drag & Drop files here or click to select file(s)
            </span>
          </Button>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold">Proof of Accommodation</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload proof of hotel accommodation or invitation from hosts in Sri
            Lanka.
          </p>
          <Button
            variant="outline"
            className="w-full h-32 border-dashed flex flex-col items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            <span className="mt-2 text-sm text-gray-500">
              Drag & Drop files here or click to select file(s)
            </span>
          </Button>
        </div>
      </CardContent>
    </>
  );
}

function ReviewSubmitForm() {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Review & Submit</CardTitle>
        <p className="text-sm text-gray-500">
          Please review your application before submitting.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="border p-4 rounded-md">
            <h3 className="font-bold mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Name:</div>
              <div>John Doe</div>
              <div className="text-gray-500">Date of Birth:</div>
              <div>1990-01-01</div>
              <div className="text-gray-500">Nationality:</div>
              <div>United States</div>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h3 className="font-bold mb-2">Passport Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Passport Number:</div>
              <div>AB1234567</div>
              <div className="text-gray-500">Issue Date:</div>
              <div>2020-01-01</div>
              <div className="text-gray-500">Expiry Date:</div>
              <div>2030-01-01</div>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h3 className="font-bold mb-2">Travel Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Arrival Date:</div>
              <div>2023-12-15</div>
              <div className="text-gray-500">Purpose:</div>
              <div>Tourism</div>
              <div className="text-gray-500">Flight Number:</div>
              <div>SQ123</div>
            </div>
          </div>

          <div className="border p-4 rounded-md">
            <h3 className="font-bold mb-2">Contact Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-gray-500">Email:</div>
              <div>john.doe@example.com</div>
              <div className="text-gray-500">Phone:</div>
              <div>+1 123-456-7890</div>
              <div className="text-gray-500">Address in Sri Lanka:</div>
              <div>Hotel Sunshine, Colombo</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="confirm" />
            <label htmlFor="confirm" className="text-sm">
              I confirm that all the information provided is accurate and
              complete.
            </label>
          </div>
        </div>
      </CardContent>
    </>
  );
}
