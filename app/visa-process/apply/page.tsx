"use client";

import { use, useEffect, useState } from "react";
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
import {
  Check,
  CheckCircle,
  FileCheck,
  FileText,
  Phone,
  Plane,
  User,
  Users,
} from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useSession } from "next-auth/react";
import { Select } from "@/components/ui/select";

export default function VisaApplication() {
  const session = useSession();
  const userId = session.data?.user?.id;
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    personalInfo: {
      surname: "",
      otherNames: "",
      title: "",
      civilStatus: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      countryOfBirth: "",
      occupation: "",
    },
    passportInfo: {
      passportNumber: "",
      placeOfIssue: "",
      passportIssueDate: "",
      passportExpiryDate: "",
    },
    childInfo: {
      numberOfChildren: 0,
      child1Surname: "",
      child1OtherNames: "",
      child1DateOfBirth: "",
      child1Gender: "",
      child1Relationship: "",
      child2Surname: "",
      child2OtherNames: "",
      child2DateOfBirth: "",
      child2Gender: "",
      child2Relationship: "",
    },

    travelInfo: {
      intendedArrivalDate: "",
      purposeOfVisit: "",
      portOfDeparture: "",
      flightNumber: "",
    },

    contactInfo: {
      numberAndStreet: "",
      city: "",
      state: "",
      zipPostalCode: "",
      country: "",
      addressInSriLanka: "",
      email: "",
      telephoneNumber: "",
      mobileNumber: "",
      faxNumber: "",
    },
    declarations: {
      validResidentVisa: true,
      currentlyInSriLanka: true,
      validMultipleEntryVisa: true,
    },
    documentUpload: {
      passportPhoto: null,
      portraitPhoto1: null,
      portraitPhoto2: null,
      returnTicket: null,
      proofOfAccommodation: null,
    },
  });

  const totalSteps = 8;

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form submitted:", formData);
      handleSubmit();
    }
  };

  const goToPreviousStep = (e) => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleCheckboxChange = (
    section: string,
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleInputChange = (
    section: string,
    field: string,
    value: string | boolean | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...(prev[section] as any),
        [field]: value,
      },
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      documentUpload: {
        ...prev.documentUpload,
        [field]: file,
      },
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const submitData = new FormData();
    // Add userId
    submitData.append("userId", userId);
    // Add non-file fields
    Object.entries(formData).forEach(([section, fields]) => {
      if (section !== "documentUpload") {
        Object.entries(fields).forEach(([field, value]) => {
          submitData.append(`${section}.${field}`, value.toString());
        });
      }
    });
    // Add files
    Object.entries(formData.documentUpload).forEach(([field, file]) => {
      if (file) {
        submitData.append(`documentUpload.${field}`, file);
      }
    });

    try {
      const response = await fetch("/api/visa-applications", {
        method: "POST",
        body: submitData,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application");
      }
      setShowSuccess(true);
      setCurrentStep(1);
      // Reset form
      setFormData({
        personalInfo: {
          surname: "",
          otherNames: "",
          title: "",
          civilStatus: "",
          dateOfBirth: "",
          gender: "",
          nationality: "",
          countryOfBirth: "",
          occupation: "",
        },
        passportInfo: {
          passportNumber: "",
          placeOfIssue: "",
          passportIssueDate: "",
          passportExpiryDate: "",
        },
        childInfo: {
          numberOfChildren: 0,
          child1Surname: "",
          child1OtherNames: "",
          child1DateOfBirth: "",
          child1Gender: "",
          child1Relationship: "",
          child2Surname: "",
          child2OtherNames: "",
          child2DateOfBirth: "",
          child2Gender: "",
          child2Relationship: "",
        },
        travelInfo: {
          intendedArrivalDate: "",
          purposeOfVisit: "",
          portOfDeparture: "",
          flightNumber: "",
        },
        contactInfo: {
          numberAndStreet: "",
          city: "",
          state: "",
          zipPostalCode: "",
          country: "",
          addressInSriLanka: "",
          email: "",
          telephoneNumber: "",
          mobileNumber: "",
          faxNumber: "",
        },
        declarations: {
          validResidentVisa: true,
          currentlyInSriLanka: true,
          validMultipleEntryVisa: true,
        },
        documentUpload: {
          passportPhoto: null,
          portraitPhoto1: null,
          portraitPhoto2: null,
          returnTicket: null,
          proofOfAccommodation: null,
        },
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-[16px] sm:mx-[64px] md:mx-[120px] min-h-screen">
      {/* Progress Steps */}
      <div className=" w-full  py-8">
        <div className="w-full flex items-center justify-center">
          <div className="flex items-start w-full max-w-3xl mb-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
              <div
                key={step}
                className="flex-1 flex flex-col items-center relative">
                <div
                  className={`h-10 w-10 z-10 rounded-full flex items-center justify-center text-white font-bold ${
                    currentStep >= step ? "bg-primary-600" : "bg-gray-800"
                  }`}>
                  {step}
                </div>
                <div className="text-xs mt-2 text-center ">
                  {step === 1 && "Personal Information"}
                  {step === 2 && "Passport Information"}
                  {step === 3 && "Child Information"}
                  {step === 4 && "Travel Information"}
                  {step === 5 && "Contact Information"}
                  {step === 6 && "Declarations"}
                  {step === 7 && "Document Upload"}
                  {step === 8 && "Review & Submit"}
                </div>
                {step < 9 && (
                  <div
                    className={`absolute transform translate-y-4 h-[1px] z-0  bg-black ${
                      step === 1
                        ? "w-1/2 right-0"
                        : step === 8
                        ? "w-1/2 left-0"
                        : "w-full"
                    }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full mx-auto">
          <Card className="shadow-md">
            {currentStep === 1 && (
              <PersonalInformationForm
                handleInputChange={handleInputChange}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 2 && (
              <PassportInformationForm
                handleInputChange={handleInputChange}
                formData={formData}
              />
            )}
            {currentStep === 3 && (
              <ChildInformationForm
                handleInputChange={handleInputChange}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 4 && (
              <TravelInformationForm
                handleInputChange={handleInputChange}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 5 && (
              <ContactInformationForm
                handleInputChange={handleInputChange}
                formData={formData}
              />
            )}
            {currentStep === 6 && (
              <DeclarationsForm
                handleInputChange={handleInputChange}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 7 && (
              <DocumentUploadForm
                handleFileChange={handleFileChange}
                formData={formData}
                handleCheckboxChange={handleCheckboxChange}
              />
            )}
            {currentStep === 8 && <ReviewSubmitForm formData={formData} />}

            <div className="p-6 flex justify-between">
              <Button
                className="rounded-full"
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 1}>
                Previous
              </Button>
              <Button
                onClick={goToNextStep}
                className="bg-black text-white hover:bg-gray-800 rounded-full">
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
        <DialogContent className="sm:max-w-md bg-white">
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
              className="w-full bg-primary-500 hover:bg-primary-600"
              onClick={() => setShowSuccess(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function PersonalInformationForm({
  handleInputChange,
  handleCheckboxChange,
  formData,
}: any) {
  const titles = [
    { id: "mr", label: "Mr." },
    { id: "mrs", label: "Mrs." },
    { id: "miss", label: "Miss" },
    { id: "ms", label: "Ms." },
    { id: "rev", label: "Rev." },
    { id: "dr", label: "Dr." },
    { id: "master", label: "Master" },
  ];

  const civilStatus = [
    { id: "married", label: "Married" },
    { id: "unmarried", label: "Unmarried" },
    { id: "divorced", label: "Divorced" },
    { id: "widowed", label: "Widowed" },
    { id: "other", label: "Other" },
  ];

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
            <Input
              id="personalInfo.surname"
              value={formData.personalInfo.surname}
              onChange={(e) =>
                handleInputChange("personalInfo", "surname", e.target.value)
              }
              required
              placeholder="Enter your surname / family name"
            />
          </div>
          <div>
            <Label>Other / Given Names</Label>
            <Input
              id="personalInfo.otherNames"
              value={formData.personalInfo.otherNames}
              onChange={(e) =>
                handleInputChange("personalInfo", "otherNames", e.target.value)
              }
              placeholder="Enter your other / given names"
            />
          </div>
        </div>

        <div>
          <Label>Title</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {titles.map((title) => (
              <div key={title.id} className="flex items-center space-x-2">
                <Checkbox
                  id={title.id}
                  checked={formData.personalInfo.title === title.label}
                  onCheckedChange={() =>
                    handleCheckboxChange("personalInfo", "title", title.label)
                  }
                />
                <label htmlFor={title.id} className="text-sm">
                  {title.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Civil Status</Label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {civilStatus.map((civilStat) => (
              <div key={civilStat.id} className="flex items-center space-x-2">
                <Checkbox
                  id={civilStat.id}
                  checked={
                    formData.personalInfo.civilStatus === civilStat.label
                  }
                  onCheckedChange={() =>
                    handleCheckboxChange(
                      "personalInfo",
                      "civilStatus",
                      civilStat.label
                    )
                  }
                />
                <label htmlFor={civilStat.id} className="text-sm">
                  {civilStat.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Label>Date of Birth</Label>
          <div className=" mt-2">
            <Input
              id="personalInfo.dateOfBirth"
              value={formData.personalInfo.dateOfBirth}
              onChange={(e) =>
                handleInputChange("personalInfo", "dateOfBirth", e.target.value)
              }
              placeholder="Year / Month / Day"
            />
          </div>
        </div>

        <div>
          <Label>Gender</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="male"
                checked={formData.personalInfo.gender === "male"}
                onCheckedChange={() =>
                  handleCheckboxChange("personalInfo", "gender", "male")
                }
              />
              <label htmlFor="male" className="text-sm">
                Male
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="female"
                checked={formData.personalInfo.gender === "female"}
                onCheckedChange={() =>
                  handleCheckboxChange("personalInfo", "gender", "female")
                }
              />
              <label htmlFor="female" className="text-sm">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Nationality</Label>
            <Input
              id="personalInfo.nationality"
              value={formData.personalInfo.nationality}
              onChange={(e) =>
                handleInputChange("personalInfo", "nationality", e.target.value)
              }
              placeholder="Enter your nationality"
            />
          </div>
          <div>
            <Label>Country of Birth</Label>
            <Input
              id="personalInfo.countryOfBirth"
              value={formData.personalInfo.countryOfBirth}
              onChange={(e) =>
                handleInputChange(
                  "personalInfo",
                  "countryOfBirth",
                  e.target.value
                )
              }
              placeholder="Enter your country of birth"
            />
          </div>
        </div>

        <div>
          <Label>Occupation</Label>
          <Input
            id="personalInfo.occupation"
            value={formData.personalInfo.occupation}
            onChange={(e) =>
              handleInputChange("personalInfo", "occupation", e.target.value)
            }
            placeholder="Enter your occupation"
          />
        </div>
      </CardContent>
    </div>
  );
}

function PassportInformationForm({ formData, handleInputChange }) {
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
            <Label htmlFor="passportInfo.passportNumber">Passport Number</Label>
            <Input
              id="passportInfo.passportNumber"
              value={formData.passportInfo.passportNumber}
              onChange={(e) =>
                handleInputChange(
                  "passportInfo",
                  "passportNumber",
                  e.target.value
                )
              }
              required
              placeholder="Enter your passport number"
            />
          </div>
          <div>
            <Label htmlFor="passportInfo.placeOfIssue">Place of Issue</Label>
            <Input
              id="passportInfo.placeOfIssue"
              value={formData.passportInfo.placeOfIssue}
              onChange={(e) =>
                handleInputChange(
                  "passportInfo",
                  "placeOfIssue",
                  e.target.value
                )
              }
              placeholder="Enter the place of issue of your passport"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Passport Issued Date</Label>
            <div className=" mt-2">
              <Input
                id="passportInfo.passportIssuedDate"
                value={formData.passportInfo.passportIssuedDate}
                onChange={(e) =>
                  handleInputChange(
                    "passportInfo",
                    "passportIssuedDate",
                    e.target.value
                  )
                }
                placeholder="Year / Month / Date"
              />
            </div>
          </div>
          <div>
            <Label>Passport Expiry Date</Label>
            <div className=" mt-2">
              <Input
                id="passportInfo.passportExpiryDate"
                value={formData.passportInfo.passportExpiryDate}
                onChange={(e) =>
                  handleInputChange(
                    "passportInfo",
                    "passportExpiryDate",
                    e.target.value
                  )
                }
                placeholder="Year / Month / Date"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
}

function ChildInformationForm({
  formData,
  handleInputChange,
  handleCheckboxChange,
}) {
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
          <Input
            id="childInfo.numberOfChildren"
            value={formData.childInfo.numberOfChildren}
            onChange={(e) =>
              handleInputChange("childInfo", "numberOfChildren", e.target.value)
            }
            placeholder="Enter the number of children"
            className="mt-2"
          />
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold mb-4">Child 1</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Surname / Family Name</Label>
              <Input
                id="child1.surname"
                value={formData.childInfo.child1Surname}
                onChange={(e) =>
                  handleInputChange(
                    "childInfo",
                    "child1Surname",
                    e.target.value
                  )
                }
                placeholder="Enter the surname / family name"
              />
            </div>
            <div>
              <Label>Other / Given Names</Label>
              <Input
                id="child1.otherGivenNames"
                value={formData.childInfo.child1OtherNames}
                onChange={(e) =>
                  handleInputChange(
                    "childInfo",
                    "child1OtherNames",
                    e.target.value
                  )
                }
                placeholder="Enter other / given names"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label>Date of Birth</Label>
            <div className="grid grid-cols-3 gap-2 mt-2">
              <Input
                id="child1.dateOfBirth"
                value={formData.childInfo.child1DateOfBirth}
                onChange={(e) =>
                  handleInputChange(
                    "childInfo",
                    "child1DateOfBirth",
                    e.target.value
                  )
                }
                placeholder="Year / Month / Date"
              />
            </div>
          </div>
          <div>
            <Label>Gender</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {/* update form */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="1male"
                  checked={formData.childInfo.child1Gender === "male"}
                  onCheckedChange={() =>
                    handleCheckboxChange("childInfo", "child1Gender", "male")
                  }
                />
                <label htmlFor="1male" className="text-sm">
                  Male
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="1female"
                  checked={formData.childInfo.child1Gender === "female"}
                  onCheckedChange={() =>
                    handleCheckboxChange("childInfo", "child1Gender", "female")
                  }
                />
                <label htmlFor="1female" className="text-sm">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Label>Relationship</Label>
            <Input
              id="child1.relationship"
              value={formData.childInfo.child1Relationship}
              onChange={(e) =>
                handleInputChange(
                  "childInfo",
                  "child1Relationship",
                  e.target.value
                )
              }
              placeholder="Enter the relationship"
              className="mt-2"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold mb-4">Child 2</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Surname / Family Name</Label>
              <Input
                id="child2.surname"
                value={formData.childInfo.child2Surname}
                onChange={(e) =>
                  handleInputChange(
                    "childInfo",
                    "child2Surname",
                    e.target.value
                  )
                }
                placeholder="Enter the surname / family name"
              />
            </div>
            <div>
              <Label>Other / Given Names</Label>
              <Input
                id="child2.otherGivenNames"
                value={formData.childInfo.child2OtherNames}
                onChange={(e) =>
                  handleInputChange(
                    "childInfo",
                    "child2OtherNames",
                    e.target.value
                  )
                }
                placeholder="Enter other / given names"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label>Date of Birth</Label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <Input
                  id="child2.dateOfBirth"
                  value={formData.childInfo.child2DateOfBirth}
                  onChange={(e) =>
                    handleInputChange(
                      "childInfo",
                      "child2DateOfBirth",
                      e.target.value
                    )
                  }
                  placeholder="Year / Month / Date"
                />
              </div>
            </div>
            <div>
              <Label>Gender</Label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="male"
                    checked={formData.childInfo.child2Gender === "male"}
                    onCheckedChange={() =>
                      handleCheckboxChange("childInfo", "child2Gender", "male")
                    }
                  />
                  <label htmlFor="male" className="text-sm">
                    Male
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="female"
                    checked={formData.childInfo.child2Gender === "female"}
                    onCheckedChange={() =>
                      handleCheckboxChange(
                        "childInfo",
                        "child2Gender",
                        "female"
                      )
                    }
                  />
                  <label htmlFor="female" className="text-sm">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Label>Relationship</Label>
            <Input
              id="child2.relationship"
              value={formData.childInfo.child2Relationship}
              onChange={(e) =>
                handleInputChange(
                  "childInfo",
                  "child2Relationship",
                  e.target.value
                )
              }
              placeholder="Enter the relationship"
              className="mt-2"
            />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function TravelInformationForm({
  formData,
  handleInputChange,
  handleCheckboxChange,
}) {
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
            <Input
              id="arrivalDate"
              value={formData.travelInfo?.intendedArrivalDate}
              onChange={(e) =>
                handleInputChange(
                  "travelInfo",
                  "intendedArrivalDate",
                  e.target.value
                )
              }
              placeholder="Year / Month / Date"
            />
          </div>
        </div>

        <div>
          <Label>Purpose of Visit</Label>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tourism"
                checked={formData.travelInfo?.purposeOfVisit === "tourism"}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    "travelInfo",
                    "purposeOfVisit",
                    "tourism"
                  )
                }
              />
              <label htmlFor="tourism" className="text-sm">
                Tourism
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="business"
                checked={formData.travelInfo?.purposeOfVisit === "business"}
                onCheckedChange={() =>
                  handleCheckboxChange(
                    "travelInfo",
                    "purposeOfVisit",
                    "business"
                  )
                }
              />
              <label htmlFor="business" className="text-sm">
                Business
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="other"
                checked={formData.travelInfo?.purposeOfVisit === "other"}
                onCheckedChange={() =>
                  handleCheckboxChange("travelInfo", "purposeOfVisit", "other")
                }
              />
              <label htmlFor="other" className="text-sm">
                Other
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Port of Departure</Label>
            <Input
              id="portOfDeparture"
              value={formData.travelInfo?.portOfDeparture}
              onChange={(e) =>
                handleInputChange(
                  "travelInfo",
                  "portOfDeparture",
                  e.target.value
                )
              }
              placeholder="Enter your port of departure"
              className="mt-2"
            />
          </div>
          <div>
            <Label>Flight Number & Name of Airline / Vessel</Label>
            <Input
              id="flightNumber"
              value={formData.travelInfo?.flightNumber}
              onChange={(e) =>
                handleInputChange("travelInfo", "flightNumber", e.target.value)
              }
              placeholder="Enter your flight number and name of vessel"
              className="mt-2"
            />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function ContactInformationForm({ formData, handleInputChange }) {
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
              <Input
                id="numberAndStreet"
                value={formData.contactInfo?.numberAndStreet}
                onChange={(e) =>
                  handleInputChange(
                    "contactInfo",
                    "numberAndStreet",
                    e.target.value
                  )
                }
                placeholder="Enter your number and street"
              />
            </div>
            <div>
              <Label>City</Label>
              <Input
                id="city"
                value={formData.contactInfo?.city}
                onChange={(e) =>
                  handleInputChange("contactInfo", "city", e.target.value)
                }
                placeholder="Enter your city"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <Label>State</Label>
              <Input
                id="state"
                value={formData.contactInfo?.state}
                onChange={(e) =>
                  handleInputChange("contactInfo", "state", e.target.value)
                }
                placeholder="Enter your state"
              />
            </div>
            <div>
              <Label>Zip / Postal Code</Label>
              <Input
                id="zipPostalCode"
                value={formData.contactInfo?.zipPostalCode}
                onChange={(e) =>
                  handleInputChange(
                    "contactInfo",
                    "zipPostalCode",
                    e.target.value
                  )
                }
                placeholder="Enter your zip / postal code"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label>Country</Label>
            <Input
              id="country"
              value={formData.contactInfo?.country}
              onChange={(e) =>
                handleInputChange("contactInfo", "country", e.target.value)
              }
              placeholder="Enter the country"
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <Label>Address in Sri Lanka</Label>
          <Input
            id="addressInSriLanka"
            value={formData.contactInfo?.addressInSriLanka}
            onChange={(e) =>
              handleInputChange(
                "contactInfo",
                "addressInSriLanka",
                e.target.value
              )
            }
            placeholder="Enter your address in Sri Lanka"
            className="mt-2"
          />
        </div>

        <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>E-mail Address</Label>
            <Input
              id="emailAddress"
              value={formData.contactInfo?.emailAddress}
              onChange={(e) =>
                handleInputChange("contactInfo", "emailAddress", e.target.value)
              }
              placeholder="Enter your e-mail address"
            />
          </div>
          <div>
            <Label>Telephone Number</Label>
            <Input
              id="telephoneNumber"
              value={formData.contactInfo?.telephoneNumber}
              onChange={(e) =>
                handleInputChange(
                  "contactInfo",
                  "telephoneNumber",
                  e.target.value
                )
              }
              placeholder="Enter your telephone number"
            />
          </div>
          <div>
            <Label>Mobile Number</Label>
            <Input
              id="mobileNumber"
              value={formData.contactInfo?.mobileNumber}
              onChange={(e) =>
                handleInputChange("contactInfo", "mobileNumber", e.target.value)
              }
              placeholder="Enter your mobile number"
            />
          </div>
          <div>
            <Label>Fax Number</Label>
            <Input
              id="faxNumber"
              value={formData.contactInfo?.faxNumber}
              onChange={(e) =>
                handleInputChange("contactInfo", "faxNumber", e.target.value)
              }
              placeholder="Enter your fax number"
            />
          </div>
        </div>
      </CardContent>
    </>
  );
}

function DeclarationsForm({
  formData,
  handleInputChange,
  handleCheckboxChange,
}) {
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
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1male"
                      checked={formData.declarations.validResidentVisa === true}
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "validResidentVisa",
                          true
                        )
                      }
                    />
                    <label htmlFor="1male" className="text-sm">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1female"
                      checked={
                        formData.declarations.validResidentVisa === false
                      }
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "validResidentVisa",
                          false
                        )
                      }
                    />
                    <label htmlFor="1female" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label>Are you currently in Sri Lanka and possess an ETA</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1male"
                      checked={
                        formData.declarations.currentlyInSriLanka === true
                      }
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "currentlyInSriLanka",
                          true
                        )
                      }
                    />
                    <label htmlFor="1male" className="text-sm">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1female"
                      checked={
                        formData.declarations.currentlyInSriLanka === false
                      }
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "currentlyInSriLanka",
                          false
                        )
                      }
                    />
                    <label htmlFor="1female" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label>Do you have a valid multiple entry VISA?</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1male"
                      checked={
                        formData.declarations.validMultipleEntryVisa === true
                      }
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "validMultipleEntryVisa",
                          true
                        )
                      }
                    />
                    <label htmlFor="1male" className="text-sm">
                      Yes
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="1female"
                      checked={
                        formData.declarations.validMultipleEntryVisa === false
                      }
                      onCheckedChange={() =>
                        handleCheckboxChange(
                          "declarations",
                          "validMultipleEntryVisa",
                          false
                        )
                      }
                    />
                    <label htmlFor="1female" className="text-sm">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </>
  );
}

function DocumentUploadForm({
  formData,
  handleFileChange,
  handleCheckboxChange,
}) {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* file input */}

            <Input
              type="file"
              accept="image/*"
              id="passportPhoto"
              placeholder={
                formData.documentUpload.passportPhoto?.name ||
                "Upload passport photo"
              }
              onChange={(e) => {
                handleFileChange("passportPhoto", e.target.files[0]);
              }}></Input>
          </div>
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
              <Input
                type="file"
                accept="image/*"
                id="passportPhoto"
                placeholder={
                  formData.documentUpload.portraitPhoto1?.name ||
                  "Upload portrait photo"
                }
                onChange={(e) => {
                  handleFileChange("portraitPhoto1", e.target.files[0]);
                }}></Input>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">
                Upload Portrait Photo 2
              </p>
              <Input
                type="file"
                accept="image/*"
                id="passportPhoto"
                placeholder={
                  formData.documentUpload.portraitPhoto2?.name ||
                  "Upload portrait photo"
                }
                onChange={(e) => {
                  handleFileChange("portraitPhoto2", e.target.files[0]);
                }}></Input>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold">Return Air Ticket</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload a copy of your return air ticket.
          </p>
          <Input
            type="file"
            accept="image/*"
            id="passportPhoto"
            placeholder={
              formData.documentUpload.returnTicket?.name ||
              "Upload return ticket photo"
            }
            onChange={(e) => {
              handleFileChange("returnTicket", e.target.files[0]);
            }}></Input>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-bold">Proof of Accommodation</h3>
          <p className="text-sm text-gray-500 mb-2">
            Upload proof of hotel accommodation or invitation from hosts in Sri
            Lanka.
          </p>
          <Input
            type="file"
            accept="image/*"
            id="passportPhoto"
            placeholder={
              formData.documentUpload.proofOfAccommodation?.name || "Upload "
            }
            onChange={(e) => {
              handleFileChange("proofOfAccommodation", e.target.files[0]);
            }}></Input>
        </div>
      </CardContent>
    </>
  );
}

function ReviewSubmitForm({ formData }) {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl">Review & Submit</CardTitle>
        <p className="text-sm text-gray-500">
          Please review your application before submitting.
        </p>
      </CardHeader>
      <CardContent>
        {/* Personal Information */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <User className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Personal Information</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Surname:</span>
              <span>{formData.personalInfo.surname}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Other Names:</span>
              <span>{formData.personalInfo.otherNames}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Title:</span>
              <span>{formData.personalInfo.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Civil Status:</span>
              <span>{formData.personalInfo.civilStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date of Birth:</span>
              <span>{formData?.personalInfo.dateOfBirth}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Gender:</span>
              <span>{formData.personalInfo.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Nationality:</span>
              <span>{formData.personalInfo.nationality}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Country of Birth:</span>
              <span>{formData.personalInfo.countryOfBirth}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Occupation:</span>
              <span>{formData.personalInfo.occupation}</span>
            </div>
          </div>
        </div>

        {/* Passport Information */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <FileText className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Passport Information</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Passport Number:</span>
              <span>{formData.passportInfo.passportNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Place of Issue:</span>
              <span>{formData.passportInfo.placeOfIssue}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Issue Date:</span>
              <span>{formData.passportInfo.passportIssueDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Expiry Date:</span>
              <span>{formData.passportInfo.passportExpiryDate}</span>
            </div>
          </div>
        </div>

        {/* Child Information */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Users className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Child Information</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Number of Children:</span>
              <span>{formData.childInfo.numberOfChildren}</span>
            </div>
            {formData.childInfo.numberOfChildren >= 1 && (
              <>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 1 Surname:</span>
                  <span>{formData.childInfo.child1Surname}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 1 Other Names:</span>
                  <span>{formData.childInfo.child1OtherNames}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Child 1 Date of Birth:</span>
                  <span>{formData.childInfo.child1DateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Child 1 Gender:</span>
                  <span>{formData.childInfo.child1Gender}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 1 Relationship:</span>
                  <span>{formData.childInfo.child1Relationship}</span>
                </div>
              </>
            )}
            {formData.childInfo.numberOfChildren >= 2 && (
              <>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 2 Surname:</span>
                  <span>{formData.childInfo.child2Surname}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 2 Other Names:</span>
                  <span>{formData.childInfo.child2OtherNames}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Child 2 Date of Birth:</span>
                  <span>{formData.childInfo.child2DateOfBirth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Child 2 Gender:</span>
                  <span>{formData.childInfo.child2Gender}</span>
                </div>
                <div className="flex justify-between col-span-2">
                  <span className="font-medium">Child 2 Relationship:</span>
                  <span>{formData.childInfo.child2Relationship}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Travel Information */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Plane className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Travel Information</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Intended Arrival Date:</span>
              <span>{formData.travelInfo.intendedArrivalDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Purpose of Visit:</span>
              <span>{formData.travelInfo.purposeOfVisit}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Port of Departure:</span>
              <span>{formData.travelInfo.portOfDeparture}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Flight Number:</span>
              <span>{formData.travelInfo.flightNumber}</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Phone className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Contact Information</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Number and Street:</span>
              <span>{formData.contactInfo.numberAndStreet}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">City:</span>
              <span>{formData.contactInfo.city}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">State:</span>
              <span>{formData.contactInfo.state}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Zip/Postal Code:</span>
              <span>{formData.contactInfo.zipPostalCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Country:</span>
              <span>{formData.contactInfo.country}</span>
            </div>
            <div className="flex justify-between col-span-2">
              <span className="font-medium">Address in Sri Lanka:</span>
              <span>{formData.contactInfo.addressInSriLanka}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email:</span>
              <span>{formData.contactInfo.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Telephone Number:</span>
              <span>{formData.contactInfo.telephoneNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Mobile Number:</span>
              <span>{formData.contactInfo.mobileNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Fax Number:</span>
              <span>{formData.contactInfo.faxNumber}</span>
            </div>
          </div>
        </div>

        {/* Declarations */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <FileCheck className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Declarations</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Valid Resident Visa:</span>
              <span>
                {formData.declarations.validResidentVisa ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Currently in Sri Lanka:</span>
              <span>
                {formData.declarations.currentlyInSriLanka ? "Yes" : "No"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Valid Multiple Entry Visa:</span>
              <span>
                {formData.declarations.validMultipleEntryVisa ? "Yes" : "No"}
              </span>
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <CheckCircle className="mr-2 h-5 w-5 text-teal-500" />
            <h3 className="text-lg font-semibold">Document Upload</h3>
          </div>
          <Separator className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex justify-between">
              <span className="font-medium">Passport Photo:</span>
              <span
                className={
                  formData.documentUpload.passportPhoto
                    ? "text-green-600"
                    : "text-red-600"
                }>
                {formData.documentUpload.passportPhoto
                  ? "Uploaded"
                  : "Not Uploaded"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Portrait Photo 1:</span>
              <span
                className={
                  formData.documentUpload.portraitPhoto1
                    ? "text-green-600"
                    : "text-red-600"
                }>
                {formData.documentUpload.portraitPhoto1
                  ? "Uploaded"
                  : "Not Uploaded"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Portrait Photo 2:</span>
              <span
                className={
                  formData.documentUpload.portraitPhoto2
                    ? "text-green-600"
                    : "text-red-600"
                }>
                {formData.documentUpload.portraitPhoto2
                  ? "Uploaded"
                  : "Not Uploaded"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Return Ticket:</span>
              <span
                className={
                  formData.documentUpload.returnTicket
                    ? "text-green-600"
                    : "text-red-600"
                }>
                {formData.documentUpload.returnTicket
                  ? "Uploaded"
                  : "Not Uploaded"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Proof of Accommodation:</span>
              <span
                className={
                  formData.documentUpload.proofOfAccommodation
                    ? "text-green-600"
                    : "text-red-600"
                }>
                {formData.documentUpload.proofOfAccommodation
                  ? "Uploaded"
                  : "Not Uploaded"}
              </span>
            </div>
          </div>
          <p></p>
        </div>
      </CardContent>
    </>
  );
}
