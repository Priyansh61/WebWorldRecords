import Header from "@/components/header";
import SavedImg from "@/assets/icons/saved.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function RecordSaved() {
  return (
    <div className="pb-11 flex flex-col gap-12 w-full">
      <Header />

      <div className="px-30 w-full flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center px-36 py-16 bg-neutral-50 rounded-4xl flex-col">
          <div className="flex flex-col gap-12 justify-center items-center">
            <Image src={SavedImg} alt="Record Saved" />

            <div className="inline-flex flex-col justify-start items-center gap-2">
              <span className="text-center justify-start text-rose-600 text-3xl font-bold font-['Montserrat'] leading-[48px] tracking-wider">
                RECORD SAVED!
              </span>
              <span className="text-center justify-start text-neutral-500 text-2xl font-medium font-['Montserrat'] leading-9 tracking-wide">
                Your inquiry successfully submitted. <br />
                Our team will contact you soon.
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-center justify-end text-sky-900 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
            In the mean time
          </span>
          <Button className="w-sm">Browse Records</Button>
        </div>
      </div>
    </div>
  );
}
