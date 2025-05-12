"use client";

import { useState } from "react";
import HeaderWithIMG from "@/components/header/headerWithIMG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AuthorityIMG from "@/assets/icons/Subtract.svg";
import BadgeIMG from "@/assets/icons/badge.svg";
import GlobeIMG from "@/assets/icons/globe.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BenefitsData } from "@/constants/benefits";
import { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { TestimonialData } from "@/constants/testimonials";
import PushUPIMG from "@/assets/pushup.webp";
import QuoteOpenIMG from "@/assets/icons/double-quote-open.svg";
import QuoteCloseIMG from "@/assets/icons/double-quote-close.svg";
import ProcessSteps from "@/components/steps";
import { BecomePartnerSteps } from "@/constants/steps";
import PartnerBadgeIMG from "@/assets/images/partner-badge.webp";
import FAQsDetails from "@/faqs/faqs-details";
import { FAQsData } from "@/constants/FAQs";

export default function BecomePartner() {
  return (
    <div className="pb-12 flex flex-col md:gap-28 gap-12">
      <HeaderWithIMG
        title="Become our Partner"
        buttonText="Become a Partner"
        // backgroundImage="/images/partner-header.webp"
      />
      <div className="flex flex-col md:-mt-20 gap-3 max-lg:px-6">
        <div className="text-center justify-start">
          <span className="text-rose-600 md:text-3xl text-xl font-black font-['Montserrat'] tracking-wider">
            Partnerships
          </span>
          <span className="text-sky-900 md:text-3xl text-xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            Built to Break Boundaries
          </span>
        </div>
        <div className="text-center justify-start text-neutral-500 md:text-base text-sm font-medium font-['Montserrat'] tracking-wide">
          Unlock tools, training, and global recognition to position your
          business as a leader in record-breaking innovation
        </div>
      </div>

      <div className="flex flex-col md:gap-6 gap-4 max-lg:px-6">
        <div className="flex md:gap-8 gap-2 items-center justify-center">
          <Button className="md:w-sm">Become A Partner</Button>
          <Button variant="tertiary" className="md:w-sm">
            Login
          </Button>
        </div>
        <Button variant="link" className="max-md:text-sm">
          Sign Up Now with your Web World Records Partner account
        </Button>
      </div>

      <div className="flex flex-col bg-neutral-50 lg:py-10 lg:px-20 gap-12 px-6 py-4">
        <div className="text-center justify-start">
          <span className="text-zinc-800 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Why
          </span>
          <span className="text-rose-600 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            {" "}
            Join?
          </span>
        </div>

        <div className="flex md:flex-wrap max-md:flex-col md:gap-20 gap-x-6 gap-y-10 items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={AuthorityIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:px-6 px-4 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-3xl text-xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Local Authority
                </div>
              </div>

              <div className="text-center text-zinc-800 md:text-base text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                Be the go-to expert for record-breaking in your region.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:max-w-80 max-w-48">
            <Image
              src={BadgeIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:px-6 px-4 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-3xl text-xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Exclusive Rewards
                </div>
              </div>

              <div className="text-center text-zinc-800 md:text-base text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                Earn commissions (up to 25%) and performance bonuses.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center md:max-w-72 max-w-48">
            <Image
              src={GlobeIMG}
              alt="Local Authority"
              className="md:size-16 size-12"
            />
            <div className="flex flex-col justify-center">
              <div className="md:px-6 px-4 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 md:text-3xl text-xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Global Impact
                </div>
              </div>

              <div className="text-center text-zinc-800 md:text-base text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                Amplify client success with cutting-edge tools and 24/7 support.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="text-center justify-start md:text-5xl text-3xl font-black">
          <span className="text-zinc-800 font-['Montserrat'] leading-[48px] tracking-widest">
            Your{" "}
          </span>
          <span className="text-rose-600 font-['Montserrat'] leading-[48px] tracking-widest">
            Benefits
          </span>
        </div>

        <div className="md:flex hidden flex-col gap-8 lg:px-96 px-6">
          {BenefitsData.map((benefit, index) => (
            <Fragment key={index}>
              <div
                className={`flex ${index % 2 !== 0 ? "flex-row-reverse" : ""} gap-8 items-center justify-center`}
              >
                <div className="flex justify-center flex-1 items-center">
                  <div className="w-80 h-28 text-center text-sky-900 text-3xl font-bold font-['Montserrat'] leading-[60px] tracking-wide">
                    {benefit.title}
                  </div>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  {benefit.benefitPoints.map((point, pointIndex) => (
                    <div className="flex gap-3" key={pointIndex}>
                      <Icon icon="typcn:tick" className="size-5" />
                      <div className="flex flex-col gap-1">
                        <span className="text-rose-600 text-base font-bold font-['Montserrat'] leading-normal tracking-wide">
                          {point.title}
                        </span>
                        <span className="self-stretch text-neutral-500 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
                          {point.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {index !== BenefitsData.length - 1 && (
                <div className="h-0 outline-1 outline-offset-[-0.50px] outline-gray-200" />
              )}
            </Fragment>
          ))}
        </div>

        <div className="md:hidden flex flex-col gap-6">
          <Carousel className="w-full">
            <div className="bg-neutral-50 p-6">
              <CarouselContent>
                {BenefitsData.map((benefit, index) => (
                  <CarouselItem key={index}>
                    <div className={`flex flex-col gap-4`}>
                      <div className="flex items-center">
                        <div className="text-sky-900 md:text-3xl text-xl font-bold font-['Montserrat'] leading-[60px] tracking-wide">
                          {benefit.title}
                        </div>
                      </div>

                      <div className="flex flex-col gap-6">
                        {benefit.benefitPoints.map((point, pointIndex) => (
                          <div className="flex gap-3" key={pointIndex}>
                            <Icon icon="typcn:tick" className="size-5" />
                            <div className="flex flex-col gap-1">
                              <span className="text-rose-600 md:text-base text-sm font-bold font-['Montserrat'] leading-normal tracking-wide">
                                {point.title}
                              </span>
                              <span className="self-stretch text-neutral-500 md:text-base text-sm font-medium font-['Montserrat'] leading-normal tracking-wide">
                                {point.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselDots />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="flex flex-col gap-3">
          <div className="text-center justify-start md:text-5xl text-3xl font-black">
            <span className="text-zinc-800 font-['Montserrat'] tracking-widest">
              What partners{" "}
            </span>
            <span className="text-rose-600 font-['Montserrat'] tracking-widest">
              say
            </span>
          </div>
          <span className="text-center justify-start text-sky-900 md:text-base text-sm font-medium font-['Montserrat'] tracking-wide">
            Web World Records gives you many ways to be seen on Media.
          </span>
        </div>
        <div className="lg:px-80 px-6">
          <Carousel className="w-full">
            <CarouselContent>
              {TestimonialData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-neutral-50 rounded-4xl border border-gray-200 flex md:flex-row flex-col md:items-center p-5 pr-8 relative md:gap-16 gap-2">
                    <div className="relative md:size-48 size-36 md:flex hidden">
                      <Image
                        src={PushUPIMG}
                        alt={`${testimonial.author} from ${testimonial.company}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="flex-1 relative py-3 gap-3">
                      <Image
                        src={QuoteOpenIMG}
                        alt="Quote"
                        className="md:size-16 size-12"
                      />
                      <p className="text-[#1E40AF] md:text-lg text-base font-medium text-center md:px-8 px-4 md:mx-16 mx-4">
                        {testimonial.quote}
                      </p>
                      <div className="flex justify-end">
                        <Image
                          src={QuoteCloseIMG}
                          alt="Quote"
                          className="md:size-16 size-12"
                        />
                      </div>
                    </div>
                    <div className="md:absolute md:right-8 md:top-5 flex gap-3 items-center">
                      <div className="relative size-10 md:hidden flex">
                        <Image
                          src={PushUPIMG}
                          alt={`${testimonial.author} from ${testimonial.company}`}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="md:text-sm text-xs font-semibold">
                          {testimonial.author},
                        </p>
                        <p className="md:text-sm text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="text-center justify-start max-lg:px-6">
          <span className="text-zinc-800 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            How to{" "}
          </span>
          <span className="text-rose-600 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Join
          </span>
        </div>
        <ProcessSteps
          steps={BecomePartnerSteps}
          className="lg:w-6xl w-full lg:mx-auto"
        />
        <div className="flex md:gap-8 gap-2 items-center justify-center lg:p-0 px-6">
          <Button className="md:w-sm">Become A Partner</Button>
          <Button variant="tertiary" className="md:w-sm">
            Login
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8">
        <div className="text-center justify-start max-lg:px-6">
          <span className="text-zinc-800 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            The value of your{" "}
          </span>
          <span className="text-rose-600 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Partner Badge
          </span>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={PartnerBadgeIMG}
            alt="Partner Badge"
            className="md:size-96 size-64"
          />
        </div>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 lg:px-96 px-6">
        <span className="self-stretch text-center justify-start text-zinc-800 md:text-5xl text-3xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
          FAQs
        </span>
        <FAQsDetails FAQsData={FAQsData} />
      </div>
    </div>
  );
}
