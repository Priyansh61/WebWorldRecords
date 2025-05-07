import Image from "next/image";
import Logo from "@/assets/logo/logo.webp";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import PushUpIMG from "@/assets/pushup.webp";
import ResultDetailCard from "@/components/cards/resultDetailCard";
import ResultCard from "@/components/cards/resultCard";
import Header from "@/components/header";

export default function ResultDetail() {
  return (
    <div className="pb-12 flex flex-col gap-12">
      <Header />
      <div className="flex justify-center text-neutral-900 text-3xl font-bold font-['Montserrat'] leading-[60px] tracking-wider">
        Maximum one hand push-ups done in one minute{" "}
      </div>

      <div className="flex gap-30 px-30">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="self-stretch max-h-[30rem] rounded-xl inline-flex flex-col justify-start items-start overflow-hidden relative">
            <div className="right-3 top-3 absolute inline-flex justify-start items-start gap-2">
              <div className="px-3 py-2 bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-rose-600 flex justify-end items-center gap-2.5">
                <div className="text-right justify-start text-rose-600 text-xs font-bold font-['Montserrat'] leading-none">
                  Sports
                </div>
              </div>
              <div className="px-3 py-2 bg-white rounded-[32px] outline outline-2 outline-offset-[-2px] outline-rose-600 flex justify-end items-center gap-2.5">
                <div className="text-right justify-start text-rose-600 text-xs font-bold font-['Montserrat'] leading-none">
                  Fitness
                </div>
              </div>
            </div>
            <div className="self-stretch h-full bg-zinc-300 inline-flex justify-center items-start gap-2.5 overflow-hidden">
              <Image
                src={PushUpIMG}
                alt="push up"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="self-stretch p-3 bg-sky-900/10 inline-flex justify-between items-center rounded-b-xl">
              <div className="flex justify-start items-center gap-2">
                <Image src={Logo} alt="logo" className="size-6" />
                <div className="justify-start text-sky-900 text-xs font-medium font-['Montserrat'] leading-none">
                  www.webworldrecords.com
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <div className="flex justify-start items-center gap-3">
                  <Icon icon="mdi:youtube" className="size-7 text-sky-900" />
                  <Icon icon="mdi:instagram" className="size-7 text-sky-900" />
                  <Icon icon="mdi:facebook" className="size-7 text-sky-900" />
                  <Icon icon="prime:twitter" className="size-5 text-sky-900" />
                </div>
                <div className="justify-start text-sky-900 text-xs font-medium font-['Montserrat'] leading-none">
                  @webworldrecords
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3 py-2 bg-sky-900/10 rounded-4xl inline-flex justify-end items-center gap-2.5">
              <div className="text-right justify-start text-sky-900 text-xs font-bold font-['Montserrat'] leading-none">
                Sports
              </div>
            </div>
            <div className="px-3 py-2 bg-sky-900/10 rounded-4xl inline-flex justify-end items-center gap-2.5">
              <div className="text-right justify-start text-sky-900 text-xs font-bold font-['Montserrat'] leading-none">
                Dishant Rawal
              </div>
            </div>
            <div className="px-3 py-2 bg-sky-900/10 rounded-4xl inline-flex justify-end items-center gap-2.5">
              <div className="text-right justify-start text-sky-900 text-xs font-bold font-['Montserrat'] leading-none">
                Maximum one hand push-ups
              </div>
            </div>
          </div>

          <div className="py-4 inline-flex justify-start items-center gap-24">
            <div className="flex justify-start items-center gap-4">
              <Icon icon="bxs:category" className="size-7 text-sky-900" />
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="justify-start text-sky-900 text-xs font-medium font-['Montserrat'] leading-none">
                  Category
                </div>
                <div className="justify-start text-zinc-800 text-sm font-semibold font-['Montserrat'] leading-tight">
                  Sports and Fitness
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <div className="p-3 bg-white rounded flex justify-start items-center gap-2.5 overflow-hidden">
                <Icon
                  icon="lets-icons:date-fill"
                  className="size-7 text-sky-900"
                />
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="justify-start text-sky-900 text-xs font-medium font-['Montserrat'] leading-none">
                  Date
                </div>
                <div className="justify-start text-zinc-800 text-sm font-semibold font-['Montserrat'] leading-tight">
                  18-05-2019
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center gap-4">
              <Icon icon="bxs:category" className="size-7 text-sky-900" />
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="justify-start text-sky-900 text-xs font-medium font-['Montserrat'] leading-none">
                  RUID
                </div>
                <div className="justify-start text-zinc-800 text-sm font-semibold font-['Montserrat'] leading-tight">
                  1928302ASD
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="pt-8 flex flex-col gap-14 mr-4">
            <div className="inline-flex justify-start items-start gap-12">
              <div className="inline-flex flex-col justify-start items-start gap-8">
                <div className="inline-flex justify-start items-center gap-4">
                  <Icon icon="mdi-user" className="size-9 text-sky-900" />
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-sky-900 text-sm font-medium font-['Montserrat']">
                      Record Holder
                    </div>
                    <div className="justify-start text-zinc-800 text-lg font-semibold font-['Montserrat']">
                      Darshan Kaushal
                    </div>
                  </div>
                </div>
                <div className="inline-flex justify-start items-center gap-4">
                  <Icon
                    icon="weui:location-filled"
                    className="size-8 text-sky-900"
                  />
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-sky-900 text-sm font-medium font-['Montserrat']">
                      Location
                    </div>
                    <div className="justify-start text-zinc-800 text-lg font-semibold font-['Montserrat']">
                      Haryana
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-8">
                <div className="inline-flex justify-start items-center gap-4">
                  <Icon
                    icon="material-symbols:trophy-rounded"
                    className="size-9 text-sky-900"
                  />
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-sky-900 text-sm font-medium font-['Montserrat']">
                      Measurement
                    </div>
                    <div className="justify-start text-zinc-800 text-lg font-semibold font-['Montserrat']">
                      87
                    </div>
                  </div>
                </div>
                <div className="inline-flex justify-start items-center gap-4">
                  <Icon
                    icon="material-symbols:group-rounded"
                    className="size-9 text-sky-900"
                  />
                  <div className="inline-flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-sky-900 text-sm font-medium font-['Montserrat']">
                      Record type
                    </div>
                    <div className="justify-start text-zinc-800 text-lg font-semibold font-['Montserrat']">
                      Individual
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="self-stretch text-center justify-start text-rose-600 text-2xl font-bold font-['Montserrat'] leading-9">
                Let the world know
              </div>

              <div className="flex justify-center items-center gap-8">
                <Button variant="icon" className="px-5">
                  <Icon icon="ph:hands-clapping" className="size-6" />
                  Appreciate
                </Button>
                <Button variant="icon" className="px-5">
                  <Icon
                    icon="material-symbols:share-outline"
                    className="size-6"
                  />
                  Share
                </Button>
              </div>
            </div>

            <Button>Break this Record</Button>
          </div>
        </div>
      </div>

      <div className="w-full h-0 outline-1 outline-offset-[-0.50px] outline-yellow-400" />

      <div className="px-30 flex flex-col gap-8 max-w-7xl">
        <div className="inline-flex justify-start items-start gap-4">
          <Icon icon="mingcute:document-fill" className="size-9 text-sky-900" />
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-sky-900 text-base font-bold font-['Montserrat'] leading-7">
              Record Description
            </div>
            <div className="self-stretch justify-start text-zinc-800 text-sm font-medium font-['Montserrat'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </div>
          </div>
        </div>

        <div className="inline-flex justify-start items-start gap-4">
          <Icon icon="mingcute:document-fill" className="size-9 text-sky-900" />
          <div className="inline-flex flex-col justify-start items-start gap-1">
            <div className="justify-start text-sky-900 text-base font-bold font-['Montserrat'] leading-normal">
              Rules
            </div>
            <div className="justify-start">
              <span className="text-zinc-800 text-sm font-semibold font-['Montserrat'] leading-normal">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
                <br />
              </span>
              <ul
                className="text-zinc-800 text-sm font-medium font-['Montserrat'] leading-normal"
                style={{ listStyleType: "disc" }}
              >
                <li>Lorem ipsum dolor sit amet</li>
                <li>consectetur adipiscing elit</li>
                <li>sed do eiusmod tempor incididunt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="px-30 flex flex-col gap-6 max-w-7xl">
        <span className="self-stretch justify-start text-sky-900 text-2xl font-bold font-['Montserrat'] leading-9">
          Record History
        </span>
        <div className="flex flex-wrap gap-3">
          {[...Array(6)].map((_, index) => (
            <ResultDetailCard
              key={index}
              imageUrl={PushUpIMG}
              recordHolder="Kunal Dogra"
              date="17/08/2019"
              location="Lucknow"
              tag="Current"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-12 px-30">
        <div className="h-0 outline-1 outline-offset-[-0.50px] outline-gray-200" />

        <div className="flex flex-wrap gap-12 items-center">
          {Array(3)
            .fill({
              recordHolder: "Darshan Kaushal",
              location: "Haryana, India",
              date: "18/04/2019",
              tag: "Current",
              title: "Maximum one hand push-ups in one minute",
              cardImage: PushUpIMG,
              recordType: "Individual",
            })
            .map((data, index) => (
              <ResultCard
                key={index}
                recordHolder={data.recordHolder}
                location={data.location}
                date={data.date}
                tag={data.tag}
                title={data.title}
                cardImage={data.cardImage}
                recordType={data.recordType}
              />
            ))}
          <Button variant="icon" className="text-sky-900 px-5 py-3.5">
            See more
          </Button>
        </div>
      </div>
    </div>
  );
}
