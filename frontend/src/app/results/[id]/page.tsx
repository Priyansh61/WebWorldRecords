import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import Logo from "@/assets/logo/logo.webp";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import PushUpIMG from "@/assets/pushup.webp";

export default function ResultDetail() {
  return (
    <div className="p-12 pt-9 pb-12 flex flex-col gap-10">
      <div className="inline-flex flex-col justify-start items-center gap-5 w-full">
        <div className="flex justify-between items-center gap-8 w-full">
          <div className="px-2.5 py-3 bg-neutral-50 rounded-3xl inline-flex justify-start items-center">
            <Image src={LeftIcon} alt="left icon" className="size-5" />
          </div>
          <div className="flex gap-6 items-center">
            <Image src={Logo} alt="logo" className="size-14" />
            <div className="text-center justify-start">
              <span className="text-sky-900 text-[26px] font-black font-['Montserrat'] leading-loose tracking-wider">
                MAKE IT OR{" "}
              </span>
              <span className="text-rose-600 text-[26px] font-black font-['Montserrat'] leading-loose tracking-wider">
                BREAK
              </span>
              <span className="text-sky-900 text-[26px] font-black font-['Montserrat'] leading-loose tracking-wider">
                {" "}
                IT !
              </span>
            </div>
          </div>
          <div />
        </div>
        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-gray-200" />
      </div>

      <div className="flex justify-center text-neutral-900 text-3xl font-bold font-['Montserrat'] leading-[60px] tracking-wider">
        Maximum one hand push-ups done in one minute{" "}
      </div>

      <div className="flex gap-20">
        <div className="flex-1 flex flex-col gap-8">
          <div className="self-stretch max-h-2/4 rounded-xl inline-flex flex-col justify-start items-start overflow-hidden">
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

          <div>asdfasf</div>
        </div>

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
  );
}
