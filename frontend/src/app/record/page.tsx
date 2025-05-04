"use client";

import React, { useState } from "react";
import HeaderWithIMG from "@/components/header/headerWithIMG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GlobeIMG from "@/assets/icons/globe.svg";
import BookIMG from "@/assets/icons/book.svg";
import CertificateIMG from "@/assets/icons/certificate.svg";
import InstagramIMG from "@/assets/icons/instagram.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { RecordsCarouselData, successStoriesData } from "@/constants/records";
import PushUPIMG from "@/assets/pushup.webp";
import ProcessSteps from "@/components/steps";
import { MakeRecordSteps } from "@/constants/steps";
import FAQsDetails from "@/faqs/faqs-details";
import { FAQsData } from "@/constants/FAQs";
import Fail1IMG from "@/assets/images/fail1.webp";
import Fail2IMG from "@/assets/images/fail2.webp";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Record() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Handle dot navigation
  const handleDotClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="pb-12 flex flex-col gap-28">
      <HeaderWithIMG title="Make it ot Break it!" buttonText="Make a Record" />
      <div className="flex flex-col -mt-20 gap-3">
        <div className="text-center justify-start">
          <span className="text-rose-600 text-3xl font-black font-['Montserrat'] tracking-wider">
            Make
          </span>
          <span className="text-sky-900 text-3xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            a Record or
          </span>
          <span className="text-rose-600 text-3xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            Break
          </span>
          <span className="text-sky-900 text-3xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            a Record
          </span>
        </div>
        <div className="text-center justify-start text-neutral-500 text-base font-medium font-['Montserrat'] tracking-wide">
          “No matter your digital ambition, push beyond limits with Web World
          Records”
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Button variant="link">
          No Experts Needed –It’s Easier Than You Think !!!
        </Button>
        <div className="flex gap-8 items-center justify-center">
          <Button className="w-sm">Make a record</Button>
          <Button variant="tertiary" className="w-sm">
            Break a record
          </Button>
        </div>
      </div>

      <div className="flex flex-col bg-neutral-50 py-10 px-20 gap-12">
        <div className="flex flex-col gap-3">
          <div className="text-center justify-start">
            <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
              Get
            </span>
            <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
              {" "}
              featured
            </span>
            <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
              {" "}
              on...
            </span>
          </div>
          <span className="text-center justify-start text-sky-900 text-base font-medium font-['Montserrat'] tracking-wide">
            Web World Records gives you many ways to be seen on Media.
          </span>
        </div>

        <div className="flex gap-8 items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center max-w-72">
            <Image src={GlobeIMG} alt="Local Authority" className="size-16" />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-4 inline-flex justify-center">
                <div className="text-center text-sky-900 text-2xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Website
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center max-w-72">
            <Image src={BookIMG} alt="Local Authority" className="size-16" />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-4 inline-flex justify-center">
                <div className="text-center text-sky-900 text-2xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Yearbook
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center max-w-72">
            <Image
              src={CertificateIMG}
              alt="Local Authority"
              className="size-16"
            />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-4 inline-flex justify-center">
                <div className="text-center text-sky-900 text-2xl font-medium font-['Montserrat'] tracking-wider">
                   Web World Records Certificate
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center max-w-72">
            <Image
              src={InstagramIMG}
              alt="Local Authority"
              className="size-16"
            />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-4 inline-flex justify-center">
                <div className="text-center text-sky-900 text-2xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Social Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Reasons{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            to Try a World Record
          </span>
        </div>
        {/* <div className="px-80 relative"> */}
        <Carousel
          className="w-full px-80 relative"
          setApi={(api) => {
            setCarouselApi(api);
            if (api) {
              api.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent>
            {RecordsCarouselData.map((record, index) => (
              <CarouselItem key={index}>
                <div className="bg-neutral-50 rounded-4xl border border-gray-200 flex p-5 pr-8 relative gap-16">
                  <div className="flex flex-col gap-8">
                    <div className="relative size-48 shrink-0">
                      <Image
                        src={PushUPIMG}
                        alt={record.author}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <span className="justify-end text-zinc-800 text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                      Your name, what you do
                    </span>
                  </div>

                  <div className="flex flex-col gap-8">
                    <span className="text-sky-900 text-2xl font-bold font-['Montserrat'] tracking-wide">
                      {record.title}
                    </span>

                    <div className="flex flex-col gap-2">
                      <span className="text-rose-600 text-sm font-bold font-['Montserrat'] leading-normal tracking-wide">
                        My Story
                      </span>
                      <p className="self-stretch text-neutral-500 text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                        {record.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center mt-5 items-center space-x-2">
          {RecordsCarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`rounded-full cursor-pointer ${activeIndex === index ? "bg-rose-600 size-3" : "bg-neutral-500 size-2"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* </div> */}

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            How to{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Start
          </span>
        </div>
        <ProcessSteps steps={MakeRecordSteps} className="w-8xl mx-auto" />
        <div className="flex gap-8 items-center justify-center">
          <Button className="w-sm">Make a record</Button>
          <Button variant="tertiary" className="w-sm">
            Break a record
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-1">
          <div className="text-center justify-start">
            <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
              Success{" "}
            </span>
            <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
              Stories
            </span>
          </div>
          <span className="self-stretch text-center justify-start text-neutral-500 text-xl font-medium font-['Montserrat'] tracking-wide">
            "But I’m Just a Regular Person!"
          </span>
        </div>

        <Carousel
          className="w-full px-60 relative"
          setApi={(api) => {
            setCarouselApi(api);
            if (api) {
              api.on("select", () => {
                setActiveIndex(api.selectedScrollSnap());
              });
            }
          }}
        >
          <CarouselContent>
            {successStoriesData.map((story, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="bg-neutral-50 rounded-4xl border border-gray-200 p-5 min-h-80 flex flex-col gap-10 justify-between">
                  <div className="flex gap-12">
                    <div className="relative size-36 shrink-0">
                      <Image
                        src={PushUPIMG}
                        alt={story.title}
                        fill
                        className="object-cover rounded-xl"
                      />
                      <div className="size-24 absolute -right-6 -bottom-6 rounded-full border-2 border-white z-10">
                        <Image
                          src={PushUPIMG}
                          alt={story.title}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <span className="self-stretch text-black text-base font-bold font-['Montserrat'] tracking-tight">
                        {story.title}
                      </span>
                      <span className="self-stretch text-sky-900 text-base font-medium font-['Montserrat'] tracking-tight">
                        {story.description}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-3 bg-white rounded-xl inline-flex items-center gap-4">
                    <Icon
                      icon="mingcute:celebrate-fill"
                      className="size-7 text-rose-600 shrink-0"
                    />
                    <div className="justify-start text-rose-600 text-xl font-bold font-['Montserrat'] tracking-wide">
                      {story.tagline}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-2">
            <span className="self-stretch text-center justify-start text-sky-900 text-5xl font-bold font-['Montserrat'] tracking-wide">
              What if I FAIL?
            </span>
            <span className="text-center justify-start text-neutral-500 text-xl font-medium font-['Montserrat'] tracking-wide">
              That’s Okay! Failed attempts still get you:
            </span>
          </div>

          <div className="inline-flex justify-start items-center gap-8">
            <div className="inline-flex flex-col justify-center items-center">
              <Image src={Fail1IMG} alt="Fail1" className="object-cover" />
              <div className="w-96 p-5 bg-sky-900 rounded-4xl flex flex-col justify-center items-center">
                <div className="self-stretch text-center justify-start text-white text-base font-semibold font-['Montserrat'] leading-normal tracking-tight">
                  Respect for trying.
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-center">
              <Image src={Fail2IMG} alt="Fail2" className="object-cover" />
              <div className="w-96 p-5 bg-sky-900 rounded-4xl flex flex-col justify-center items-center">
                <div className="self-stretch text-center justify-start text-white text-base font-semibold font-['Montserrat'] leading-normal tracking-tight">
                  A funny story to tell
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="self-stretch text-center justify-start text-rose-600 text-3xl font-bold font-['Montserrat'] leading-[48px] tracking-wide">
          You’ll do it!
        </span>

        <div className="flex flex-col gap-4">
          <span className="text-center justify-start text-neutral-500 text-base font-medium font-['Montserrat'] leading-normal tracking-tight">
            Also Don’t Worry, we give tips to try again!!
          </span>
          <div className="flex gap-8 items-center justify-center">
            <Button className="w-sm">Contact Us</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 px-96">
        <span className="self-stretch text-center justify-start text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
          FAQs
        </span>
        <FAQsDetails FAQsData={FAQsData} />
      </div>
    </div>
  );
}
