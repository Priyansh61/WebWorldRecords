import Tags from "@/components/ui/tags";
import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import ThreeLineIcon from "@/assets/icons/three-line.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  return (
    <>
      <div className="text-center justify-start my-16 mx-48">
        <span className="text-zinc-800 text-5xl font-black leading-[48px] tracking-widest">
          Frequently Asked{" "}
        </span>
        <span className="text-rose-600 text-5xl font-black leading-[48px] tracking-widest">
          Questions
        </span>
      </div>

      <div className="flex items-center gap-8 justify-between mx-12">
        <div className="flex gap-8 items-center">
          <div className="px-2.5 py-3 bg-neutral-50 rounded-3xl inline-flex justify-start items-center">
            <Image src={LeftIcon} alt="left icon" />
          </div>
          <div className="flex gap-4 items-center">
            <Tags text="All (3)" active={true} />
            <Tags text="Sports (6)" />
          </div>
        </div>
        <div className="p-3.5 bg-neutral-50 rounded-3xl inline-flex justify-start items-center">
          <Image src={ThreeLineIcon} alt="Three Line Icon" />
        </div>
      </div>

      <div className="mx-32 mt-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>{" "}
      </div>
    </>
  );
}
