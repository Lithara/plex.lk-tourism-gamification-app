import Image from "next/image";
import { Button } from "@/components/ui/button";

import { ChevronRight, Flag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen static mx-[16px] sm:mx-[64px] md:mx-[120px] ">
      {/* Hero Section */}
      <section className="overflow-hidden  container px-4 pt-8 md:pt-12 lg:pt-16">
        <div className=" absolute bottom-[-10%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="absolute inset-0 -z-10 h-full w-[50%] bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-[96px] leading-[0.5] font-bold tracking-tight">
              <span className="flex items-center gap-2 text-[128px]">
                Explore<span className="text-primary-500">,</span>{" "}
                <Image src="/flag.png" alt="Logo" width={49} height={74} />
              </span>
              <br />
              Play <span className="text-primary-500">&</span> Share.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[600px] pt-3">
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
          <div className=" h-[450px] flex items-center justify-end">
            <Image
              src="/heroimage.png"
              width={400}
              height={350}
              alt="Hero"
              className="top-0 right-0 "
            />
          </div>
        </div>
      </section>

      {/* Promoting Local Business */}
      <section className="max-w-[1400px] relative mx-auto px-4 py-16 md:py-24 ">
        <div className=" absolute bottom-[10%] left-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="grid lg:grid-cols-2 gap-8 items-center ">
          <div>
            <Image
              src="/comingsoonimage.png"
              alt="Local businesses in Hikkaduwa"
              width={500}
              height={350}
            />
          </div>
          <div className="space-y-4">
            <Button size={"sm"} className="text-white bg-black rounded-full ">
              Coming Soon
            </Button>
            <h2 className="text-[60px]  leading-none font-bold">
              Promoting the local businesses.
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <Button variant="link" className="p-0 text-teal-500">
              Learn more <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-[1400px] relative mx-auto px-4 py-16 text-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className=" absolute bottom-[40%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="flex justify-center mb-4">
          <Image src="/favicon.png" width={41} height={59} alt="Plex.lk logo" />
        </div>
        <h2 className="text-[72px] font-bold mb-16">How it works.</h2>

        {/* Features Grid */}
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-teal-500">Explore</span> & Learn about our
                history.
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>
              <Button variant="outline" size="sm" className="rounded-full">
                Learn more
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/adams-peak.png"
                width={400}
                height={250}
                alt="Adam's Peak"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4 md:order-2">
              <h3 className="text-2xl font-bold">
                <span className="text-teal-500">Play,</span> Earn & Redeem Plex
                points.
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>
            </div>
            <div className="md:order-1 relative">
              <Image
                src="/redeem-points.png"
                width={400}
                height={250}
                alt="Redeem Plex points"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                <span className="text-teal-500">Share</span> & Save your
                valuable memories.
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/share-journey.png"
                width={400}
                height={300}
                alt="Share your journey"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
