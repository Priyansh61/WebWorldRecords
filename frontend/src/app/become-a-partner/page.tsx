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
  CarouselItem,
  type CarouselApi,
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
      <HeaderWithIMG title="Become our Partner" buttonText="Become a Partner" />
      <div className="flex flex-col -mt-20 gap-3">
        <div className="text-center justify-start">
          <span className="text-rose-600 text-3xl font-black font-['Montserrat'] tracking-wider">
            Partnerships
          </span>
          <span className="text-sky-900 text-3xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            Built to Break Boundaries
          </span>
        </div>
        <div className="text-center justify-start text-neutral-500 text-base font-medium font-['Montserrat'] tracking-wide">
          Unlock tools, training, and global recognition to position your
          business as a leader in record-breaking innovation
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-8 items-center justify-center">
          <Button className="w-sm">Become A Partner</Button>
          <Button variant="tertiary" className="w-sm">
            Login
          </Button>
        </div>
        <Button variant="link">
          Sign Up Now with your Web World Records Partner account
        </Button>
      </div>

      <div className="flex flex-col bg-neutral-50 py-10 px-20 gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Why
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            {" "}
            Join?
          </span>
        </div>

        <div className="flex gap-20 items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center max-w-72">
            <Image
              src={AuthorityIMG}
              alt="Local Authority"
              className="size-16"
            />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 text-3xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Local Authority
                </div>
              </div>

              <div className="text-center text-zinc-800 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
                Be the go-to expert for record-breaking in your region.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center max-w-80">
            <Image src={BadgeIMG} alt="Local Authority" className="size-16" />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 text-3xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Exclusive Rewards
                </div>
              </div>

              <div className="text-center text-zinc-800 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
                Earn commissions (up to 25%) and performance bonuses. 
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center max-w-72">
            <Image src={GlobeIMG} alt="Local Authority" className="size-16" />
            <div className="flex flex-col justify-center">
              <div className="px-6 py-1 inline-flex justify-center">
                <div className="text-center text-sky-900 text-3xl font-bold font-['Montserrat'] leading-loose tracking-wider">
                  Global Impact
                </div>
              </div>

              <div className="text-center text-zinc-800 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
                Amplify client success with cutting-edge tools and 24/7 support.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Your{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Benefits
          </span>
        </div>

        <div className="flex flex-col gap-8 px-96">
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
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            What partners{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            say
          </span>
        </div>
        <div className="px-80">
          <Carousel
            className="w-full"
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
              {TestimonialData.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-neutral-50 rounded-4xl border border-gray-200 flex items-center p-5 pr-8 relative gap-16">
                    <div className="relative size-48">
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
                        className="size-16"
                      />
                      <p className="text-[#1E40AF] text-lg font-medium text-center px-8 mx-16">
                        {testimonial.quote}
                      </p>
                      <div className="flex justify-end">
                        <Image
                          src={QuoteCloseIMG}
                          alt="Quote"
                          className="size-16"
                        />
                      </div>
                    </div>
                    <div className="absolute right-8 top-5 flex flex-col items-end">
                      <p className="text-sm font-semibold">
                        {testimonial.author},
                      </p>
                      <p className="text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center mt-5 items-center space-x-2">
            {TestimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`rounded-full cursor-pointer ${activeIndex === index ? "bg-rose-600 size-3" : "bg-neutral-500 size-2"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            How to{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Join
          </span>
        </div>
        <ProcessSteps steps={BecomePartnerSteps} className="w-6xl mx-auto" />
        <div className="flex gap-8 items-center justify-center">
          <Button className="w-sm">Become A Partner</Button>
          <Button variant="tertiary" className="w-sm">
            Login
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            The value of your{" "}
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            Partner Badge
          </span>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={PartnerBadgeIMG}
            alt="Partner Badge"
            className="size-96"
          />
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
