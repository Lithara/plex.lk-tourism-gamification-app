import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  country: z.string(),
  // password validation
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(10, { message: "Password cannot exceed 10 characters" }),
});

export const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// visa application form validation
const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
  message: "Date must be in YYYY-MM-DD format",
});

// Utility schema for phone numbers (allowing international formats, optional)
const phoneSchema = z
  .string()
  .optional()
  .refine((val) => !val || /^\+?\d{7,15}$/.test(val), {
    message: "Invalid phone number format",
  });

// PersonalInfo schema
const personalInfoSchema = z.object({
  surname: z.string().min(1, { message: "Surname is required" }),
  otherNames: z.string().min(1, { message: "Other names are required" }),
  title: z.string().min(1, { message: "Title is required" }),
  civilStatus: z.string().min(1, { message: "Civil status is required" }),
  dateOfBirth: dateSchema,
  gender: z.string().min(1, { message: "Gender is required" }),
  nationality: z.string().min(1, { message: "Nationality is required" }),
  countryOfBirth: z
    .string()
    .min(1, { message: "Country of birth is required" }),
  occupation: z.string().min(1, { message: "Occupation is required" }),
});

// PassportInfo schema
const passportInfoSchema = z.object({
  passportNumber: z.string().min(1, { message: "Passport number is required" }),
  placeOfIssue: z.string().min(1, { message: "Place of issue is required" }),
  passportIssueDate: dateSchema,
  passportExpiryDate: dateSchema,
});

// ChildInfo schema
const childInfoSchema = z
  .object({
    numberOfChildren: z
      .number()
      .int()
      .min(0, { message: "Number of children must be a non-negative integer" }),
    child1Surname: z.string().optional(),
    child1OtherNames: z.string().optional(),
    child1DateOfBirth: z.string().optional(),
    child1Gender: z.string().optional(),
    child1Relationship: z.string().optional(),
    child2Surname: z.string().optional(),
    child2OtherNames: z.string().optional(),
    child2DateOfBirth: z.string().optional(),
    child2Gender: z.string().optional(),
    child2Relationship: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.numberOfChildren >= 1) {
        return (
          data.child1Surname &&
          data.child1OtherNames &&
          data.child1DateOfBirth &&
          data.child1Gender &&
          data.child1Relationship
        );
      }
      return true;
    },
    {
      message: "Child 1 details are required if numberOfChildren is 1 or more",
      path: ["child1Surname"],
    }
  )
  .refine(
    (data) => {
      if (data.numberOfChildren >= 2) {
        return (
          data.child2Surname &&
          data.child2OtherNames &&
          data.child2DateOfBirth &&
          data.child2Gender &&
          data.child2Relationship
        );
      }
      return true;
    },
    {
      message: "Child 2 details are required if numberOfChildren is 2 or more",
      path: ["child2Surname"],
    }
  );

// TravelInfo schema
const travelInfoSchema = z.object({
  intendedArrivalDate: dateSchema,
  purposeOfVisit: z
    .string()
    .min(1, { message: "Purpose of visit is required" }),
  portOfDeparture: z
    .string()
    .min(1, { message: "Port of departure is required" }),
  flightNumber: z.string().min(1, { message: "Flight number is required" }),
});

// ContactInfo schema
const contactInfoSchema = z.object({
  numberAndStreet: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipPostalCode: z.string().min(1, { message: "Zip/Postal code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  addressInSriLanka: z
    .string()
    .min(1, { message: "Address in Sri Lanka is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  telephoneNumber: phoneSchema,
  mobileNumber: phoneSchema,
  faxNumber: phoneSchema,
});

// Declarations schema
const declarationsSchema = z.object({
  validResidentVisa: z.boolean(),
  currentlyInSriLanka: z.boolean(),
  validMultipleEntryVisa: z.boolean(),
});

// DocumentUpload schema
const documentUploadSchema = z.object({
  passportPhoto: z.string().optional(),
  portraitPhoto1: z.string().optional(),
  portraitPhoto2: z.string().optional(),
  returnTicket: z.string().optional(),
  proofOfAccommodation: z.string().optional(),
});

// Main application schema
export const applicationSchema = z.object({
  personalInfo: personalInfoSchema,
  passportInfo: passportInfoSchema,
  childInfo: childInfoSchema,
  travelInfo: travelInfoSchema,
  contactInfo: contactInfoSchema,
  declarations: declarationsSchema,
  documentUpload: documentUploadSchema,
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignInFormValues = z.infer<typeof signInSchema>;
export type VisaApplicationFormValues = z.infer<typeof applicationSchema>;
