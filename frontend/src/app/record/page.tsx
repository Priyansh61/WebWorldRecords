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
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
  return (
    <div className="pb-12 flex flex-col md:gap-28 gap-12">
      <HeaderWithIMG title="Make it ot Break it!" buttonText="Make a Record" />
      <div className="flex flex-col md:-mt-20 gap-3 max-lg:px-6">
        <div className="text-center justify-start md:text-3xl text-xl font-black">
          <span className="text-rose-600 font-['Montserrat'] tracking-wider">
            Make
          </span>
          <span className="text-sky-900 font-['Montserrat'] tracking-wider">
            {" "}
            a Record or
          </span>
          <span className="text-rose-600 font-['Montserrat'] tracking-wider">
            {" "}
            Break
          </span>
          <span className="text-sky-900 font-['Montserrat'] tracking-wider">
            {" "}
            a Record
          </span>
        </div>
        <div className="text-center justify-start text-neutral-500 md:text-base text-sm font-medium font-['Montserrat'] tracking-wide">
          “No matter your digital ambition, push beyond limits with Web World
          Records”
        </div>
      </div>

      <div className="flex flex-col md:gap-6 gap-4 max-lg:px-6">
        <div className="flex md:gap-8 gap-2 items-center justify-center">
          <Button className="md:w-sm">Make a record</Button>
          <Button variant="tertiary" className="md:w-sm">
            Break a record
          </Button>
        </div>
        <Button variant="link" className="max-md:text-sm">
          No Experts Needed –It’s Easier Than You Think !!!
        </Button>
      </div>

      <div className="flex flex-col bg-neutral-50 lg:py-10 lg:px-20 gap-12 px-6 py-4">
        <div className="flex flex-col gap-3">
          <div className="text-center justify-start md:text-5xl text-3xl font-black">
            <span className="text-zinc-800 font-['Montserrat'] tracking-widest">
              Get
            </span>
            <span className="text-rose-600 font-['Montserrat'] tracking-widest">
              {" "}
              featured
            </span>
            <span className="text-zinc-800 font-['Montserrat'] tracking-widest">
              {" "}
              on...
            </span>
          </div>
          <span className="text-center justify-start text-sky-900 md:text-base text-sm font-medium font-['Montserrat'] tracking-wide">
            Web World Records gives you many ways to be seen on Media.
          </span>
        </div>

        <div className="flex flex-wrap md:gap-8 gap-x-6 gap-y-10 items-center justify-center">
          <div className="flex flex-col gap-4 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={GlobeIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:p-4 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-2xl text-xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Website
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={BookIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:p-4 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-2xl text-xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Yearbook
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={CertificateIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:p-4 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-2xl text-xl font-medium font-['Montserrat'] tracking-wider">
                   Web World Records Certificate
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={InstagramIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:p-4 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-2xl text-xl font-medium font-['Montserrat'] tracking-wider">
                  Web World Records Social Media
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="text-center justify-start md:text-5xl text-3xl font-black max-lg:px-6">
          <span className="text-zinc-800 font-['Montserrat'] leading-[48px] tracking-widest">
            Reasons{" "}
          </span>
          <span className="text-rose-600 font-['Montserrat'] leading-[48px] tracking-widest">
            to Try a World Record
          </span>
        </div>

        <Carousel className="w-full lg:px-80 md:px-16 relative">
          <CarouselContent>
            {RecordsCarouselData.map((record, index) => (
              <CarouselItem key={index}>
                <div className="bg-neutral-50 md:rounded-4xl md:border border-gray-200 flex md:flex-row flex-col md:p-5 md:pr-8 p-6 relative md:gap-16 gap-4">
                  <div className="flex md:flex-col gap-8">
                    <div className="relative md:size-48 size-38 shrink-0">
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
                    <span className="text-sky-900 md:text-2xl text-xl font-bold font-['Montserrat'] tracking-wide">
                      {record.title}
                    </span>

                    <div className="flex flex-col gap-2">
                      <span className="text-rose-600 md:text-sm text-xs font-bold font-['Montserrat'] leading-normal tracking-wide">
                        My Story
                      </span>
                      <p className="self-stretch text-neutral-500 md:text-sm text-xs font-medium font-['Montserrat'] leading-normal tracking-wide">
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
          <CarouselDots />
        </Carousel>
      </div>
      {/* </div> */}

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="text-center justify-start md:text-5xl text-3xl font-black max-lg:px-6">
          <span className="text-zinc-800 font-['Montserrat'] leading-[48px] tracking-widest">
            How to{" "}
          </span>
          <span className="text-rose-600 font-['Montserrat'] leading-[48px] tracking-widest">
            Start
          </span>
        </div>
        <ProcessSteps steps={MakeRecordSteps} className="lg:w-8xl lg:mx-auto" />
        <div className="flex md:gap-8 gap-2 items-center justify-center max-lg:px-6">
          <Button className="md:w-sm">Make a record</Button>
          <Button variant="tertiary" className="md:w-sm">
            Break a record
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 max-md:px-6">
        <div className="flex flex-col gap-1">
          <div className="text-center justify-start md:text-5xl text-3xl font-black">
            <span className="text-rose-600 font-['Montserrat'] tracking-widest">
              Success{" "}
            </span>
            <span className="text-zinc-800 font-['Montserrat'] tracking-widest">
              Stories
            </span>
          </div>
          <span className="self-stretch text-center justify-start text-neutral-500 md:text-xl text-base font-medium font-['Montserrat'] tracking-wide">
            "But I’m Just a Regular Person!"
          </span>
        </div>

        <Carousel className="w-full lg:px-60 md:px-16 relative">
          <CarouselContent>
            {successStoriesData.map((story, index) => (
              <CarouselItem key={index} className="lg:basis-1/3">
                <div className="bg-neutral-50 rounded-4xl border border-gray-200 p-5 md:min-h-80 min-h-72 flex flex-col md:gap-10 gap-4 justify-between">
                  <div className="flex md:gap-12 gap-4">
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
                      <span className="self-stretch text-black md:text-base text-sm font-bold font-['Montserrat'] tracking-tight">
                        {story.title}
                      </span>
                      <span className="self-stretch text-sky-900 md:text-base text-sm font-medium font-['Montserrat'] tracking-tight">
                        {story.description}
                      </span>
                    </div>
                  </div>

                  <div className="md:px-6 md:py-3 px-3 py-2 bg-white rounded-xl inline-flex items-center gap-4">
                    <Icon
                      icon="mingcute:celebrate-fill"
                      className="md:size-7 size-6 text-rose-600 shrink-0"
                    />
                    <div className="justify-start text-rose-600 md:text-xl text-base font-bold font-['Montserrat'] tracking-wide">
                      {story.tagline}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselDots />
        </Carousel>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 max-lg:px-6">
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex flex-col gap-2 md:text-5xl text-3xl font-black">
            <span className="self-stretch text-center justify-start text-sky-900">
              What if I FAIL?
            </span>
            <span className="text-center justify-start text-neutral-500 md:text-xl text-base font-medium font-['Montserrat'] tracking-wide">
              That’s Okay! Failed attempts still get you:
            </span>
          </div>

          <div className="inline-flex justify-start items-center md:gap-8 gap-4">
            <div className="inline-flex flex-col justify-center items-center">
              <Image
                src={Fail1IMG}
                alt="Fail1"
                className="object-cover max-md:size-32"
              />
              <div className="md:w-96 md:p-5 px-6 py-3 bg-sky-900 rounded-4xl flex flex-col justify-center items-center">
                <div className="self-stretch text-center justify-start text-white md:text-base text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                  Respect for trying.
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-center">
              <Image
                src={Fail2IMG}
                alt="Fail2"
                className="object-cover max-md:size-32"
              />
              <div className="md:w-96 md:p-5 px-6 py-3 bg-sky-900 rounded-4xl flex flex-col justify-center items-center">
                <div className="self-stretch text-center justify-start text-white md:text-base text-sm font-semibold font-['Montserrat'] leading-normal tracking-tight">
                  A funny story to tell
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="self-stretch text-center justify-start text-rose-600 md:text-3xl text-xl font-bold font-['Montserrat'] leading-[48px] tracking-wide">
          You’ll do it!
        </span>

        <div className="flex flex-col gap-4">
          <span className="text-center justify-start text-neutral-500 md:text-base text-sm font-medium font-['Montserrat'] leading-normal tracking-tight">
            Also Don’t Worry, we give tips to try again!!
          </span>
          <div className="flex gap-8 items-center justify-center">
            <Button className="md:w-sm">Contact Us</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-6 lg:px-96 px-6">
        <span className="self-stretch text-center justify-start text-zinc-800 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
          FAQs
        </span>
        <FAQsDetails FAQsData={FAQsData} />
      </div>
    </div>
  );
}
