import Tags from "@/components/ui/tags";
import FAQsDetails from "./faqs-details";
import { FAQsData } from "@/constants/FAQs";
import Header from "../components/header";
export default function FAQs() {
  return (
    <>
      <Header />
      <div className="text-center justify-center md:my-16 my-6">
        <span className="text-zinc-800 md:text-5xl text-xl font-black leading-[48px] tracking-widest">
          Frequently Asked{" "}
        </span>
        <span className="text-rose-600 md:text-5xl text-2xl font-black leading-[48px] tracking-widest">
          Questions
        </span>
      </div>

      <div className="flex items-center gap-8 justify-between lg:mx-12 md:mx-8 mx-6">
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 items-center">
            <Tags text="All (3)" active={true} />
            <Tags text="Sports (6)" />
          </div>
        </div>
      </div>

      <div className="lg:mx-32 md:mx-16 mx-6 md:mt-12 mt-8">
        <FAQsDetails FAQsData={FAQsData} />
      </div>
    </>
  );
}
