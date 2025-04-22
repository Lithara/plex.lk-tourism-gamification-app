import Image from "next/image";
import { Button } from "@/components/ui/button";

import { Flag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen  mx-[16px] sm:mx-[64px] md:mx-[120px] ">
      {/* Hero Section */}
      <section
        className="overflow-hidden  container px-4 pt-8 md:pt-12 lg:pt-16
       ">
        <div className=" absolute bottom-[-10%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="absolute inset-0 -z-10 h-full w-[50%] bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Explore,{" "}
              <Flag className="inline-block w-8 h-8 text-primary-500 -mt-2" />
              <br />
              Play <span className="text-primary-500">&</span> Share.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <div className="flex gap-4">
              <Link href="/authentication/sign-up">
                <Button className="bg-black text-white rounded-full" size="lg">
                  Start Exploring
                </Button>
              </Link>
              <Button size="lg" variant="ghost">
                <p className="underline">View more details</p>
              </Button>
            </div>
          </div>
          <div className=" h-[400px] flex items-center justify-end">
            <Image
              src="/heroimage.png"
              width={422}
              height={0}
              alt="Hero"
              className="top-0 right-0 "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
