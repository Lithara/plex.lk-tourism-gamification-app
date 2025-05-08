import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen static mx-[16px] sm:mx-[64px] md:mx-[120px] ">
      {/* Hero Section */}
      <section className="overflow-hidden  mx-auto  container px-4 pt-8 md:pt-12 lg:pt-16">
        <div className=" absolute bottom-[-10%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="hidden sm:block absolute inset-0 -z-10 h-full w-[50%] bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-[64px] md:text-[96px] sm:text-6xl  sm:leading-[.9] leading-[1] font-bold tracking-tight">
              <span className="flex items-center gap-2 ">
                Explore<span className="text-primary-500">,</span>{" "}
                <Image src="/flag.png" alt="Logo" width={49} height={74} />
              </span>
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
          <div className=" h-[450px] flex items-center sm:justify-end">
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
            <p className="text-muted-foreground text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
            <Button variant="link" className="p-0 text-black underline">
              Learn more
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-[1400px] relative mx-auto px-4 py-16 text-center">
        <div className="absolute inset-0 -z-10 h-full w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <div className=" absolute bottom-[25%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="flex justify-center mb-4">
          <Image src="/favicon.png" width={41} height={59} alt="Plex.lk logo" />
        </div>
        <h2 className="text-[72px] font-bold mb-16">How it works.</h2>

        {/* Features Grid */}
        <div className="grid gap-24">
          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4">
              <h3 className="text-[48px] font-bold">
                <span className="text-primary-500">Explore</span> & Learn about
                our history.
              </h3>
              <p className="text-muted-foreground text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>
            <div className="flex  justify-end">
              <Image
                src="/adamspeak.png"
                width={588}
                height={440.57}
                alt="Adam's Peak"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4 md:order-2">
              <h3 className="text-[48px] font-bold">
                <span className="text-primary-500">Play,</span> Earn & Redeem
                Plex points.
              </h3>
              <p className="text-muted-foreground text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>
            <div className="flex  justify-start">
              <Image
                src="/play&earn.png"
                width={510}
                height={383.51}
                alt="Redeem Plex points"
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center text-left">
            <div className="space-y-4">
              <h3 className="text-[48px] font-bold ">
                <span className="text-primary-500">Share</span> & Save your
                valuable memories.
              </h3>
              <p className="text-muted-foreground text-[18px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus.
              </p>
            </div>
            <div className="flex  justify-end">
              <Image
                src="/shareujourney.png"
                width={486}
                height={441.09}
                alt="Share your journey"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="max-w-[1400px] mx-auto px-4 py-16">
        <h2 className="text-[60px] font-bold text-center mb-16">
          Highlights of our <br /> platform
          <span className="text-primary-500">.</span>
        </h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-7 h-auto gap-2">
          {/* Top Travelers */}
          <div className=" sm:relative col-span-1 sm:col-span-4 h-full w-full">
            <Image
              src={"/leaderboard.png"}
              sizes="100vw"
              width={600}
              height={400}
              alt=""
              className="object-contain"
            />
          </div>

          {/* Most Visited Place */}
          <div className="h-full sm:col-span-3  relative rounded-lg  shadow-md shadow-gray-400 p-0">
            <div className="absolute top-[10%] h-[50px] w-[50px] right-[10%]">
              <Image
                src={"/partypopper.png"}
                fill
                alt=""
                className="object-cover"
              />
            </div>

            <h3
              className="text-xl font-bold px-6 pt-6 mb-6 text-[30px] 
">
              Most visited place <br /> according to <br /> Plex
              <span className="text-primary-500">.lk</span>
            </h3>
            <div className="px-6 pt-6">
              <p className="text-[20px] font-bold text-muted-foreground">
                In 2023, The most visited place in Sri Lanka is Adams Peak
              </p>
              <p className="text-[20px] text-primary-500">
                <span className="font-bold">30,000</span> Foreigners have
                visited.
                <br />
                More than <span className="font-bold">100k PLEXES</span>{" "}
                redeemed.
              </p>
            </div>

            <div className="w-full rounded-lg">
              <Image
                src="/adamspeak1.png"
                width={600}
                height={100}
                alt="Adam's Peak - Most visited place"
                className="object-contain rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="max-w-[1400px] relative bg-transparent mx-auto px-4 py-16 mb-16 bg-gradient-to-br from-white via-white to-primary-50/50 rounded-xl">
        <div className=" absolute bottom-[-10%] right-[0%] -z-10  h-[400px] w-[300px] -translate-x-[0%] translate-y-[20%] rounded-full bg-primary-500 opacity-40 blur-[100px] overflow-x-clip"></div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="/adventure.png"
              width={500}
              height={300}
              alt="Adventure"
              className="object-contain rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-[48px] font-bold">
              <span className="text-primary-500">Ready</span> to start your
              adventure<span className="text-primary-500">?</span>
            </h2>
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white  rounded-full ">
              Let's go
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
