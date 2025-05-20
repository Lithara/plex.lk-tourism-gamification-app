import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VisaProcessing() {
  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Passport Information" },
    { number: 3, title: "Child Information" },
    { number: 4, title: "Travel Information" },
    { number: 5, title: "Contact Information" },
    { number: 6, title: "Declarations" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:mx-[120px]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Visa <span className="text-primary-500">Processing</span>
                <br />& <span className="text-primary-500">Verification</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                A Visit visa is an entry permit signifying the consent of the
                Sri Lankan Government for the admission of a foreign national to
                the country.
              </p>
              <div className="flex gap-4">
                <Link href="/visa-process/apply">
                  <Button
                    size="lg"
                    className="bg-primary-500 rounded-full text-white hover:bg-black/90">
                    Start Applying
                  </Button>
                </Link>
                <Link href="https://plex.lk">
                  <Button variant="ghost" size="lg" className="underline">
                    Visit Plex.lk Website
                    <ArrowUpRightIcon
                      size={20}
                      color="white"
                      className="bg-black"
                    />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] lg:h-[400px]">
              <div className="absolute inset-0">
                <div className="relative h-full">
                  <div className="absolute right-0 w-3/4 h-full">
                    <div className="relative flex items-center h-full">
                      <Image
                        src="/visaimage.png"
                        alt="Visa Image"
                        width={500}
                        height={0}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="container mx-auto px-4 py-12 mb-24">
          <div className="relative">
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-black lg:block hidden w-[85%] mx-auto " />
            <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center gap-4">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                    <span className="text-sm font-medium">{step.number}</span>
                  </div>
                  <span className="text-sm text-center">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
