import HeaderWithIMG from "@/components/header/headerWithIMG";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AboutUsStoryIMG from "@/assets/images/About-us-story.webp";
import ProcessSteps from "@/components/steps";
import { HowItWorksSteps } from "@/constants/steps";
import FAQsDetails from "@/faqs/faqs-details";
import { FAQsData } from "@/constants/FAQs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { BenefitsData } from "@/constants/about-us";
import AboutUsClaimIMG from "@/assets/images/About-us-claim.webp";

export default function AboutUs() {
  return (
    <div className="pb-12 flex flex-col gap-28">
      <HeaderWithIMG title="About us" />
      <div className="flex flex-col -mt-20 gap-3">
        <div className="text-center justify-start max-w-2xl mx-auto">
          <span className="text-rose-600 text-3xl font-black font-['Montserrat'] tracking-wider">
            Create
          </span>
          <span className="text-sky-900 text-3xl font-black font-['Montserrat'] tracking-wider">
            {" "}
            World Record with Small Help of Web World Records
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <span className="self-stretch text-center text-neutral-500 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
          Make Amazing World Records with our Simple and Easy Process.
        </span>
        <div className="flex gap-8 items-center justify-center">
          <Button className="w-sm">Make a record</Button>
          <Button variant="tertiary" className="w-sm">
            Break a record
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            Our
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            Story
          </span>
        </div>
        <Image src={AboutUsStoryIMG} alt="about us" className="w-4xl mx-auto" />
        <div className="self-stretch text-center justify-start">
          <span className="text-sky-900 text-2xl font-bold font-['Montserrat'] leading-10 tracking-wide">
            At Web World Records (WWR),
          </span>
          <br />
          <span className="text-sky-900 text-base font-medium font-['Montserrat'] leading-7 tracking-wide">
            we help individuals, from aspiring talents to global achievers,
            celebrate their unique accomplishments. In a world where records are
            broken every day, WWR offers a simple and transparent process for
            obtaining credible world record certification. Our mission is to
            recognize and share the stories of record-makers, breaking
            boundaries and inspiring others.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            Why We
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            Exist
          </span>
        </div>
        <div className="self-stretch text-center justify-start">
          <span className="text-sky-900 text-base font-medium font-['Montserrat'] leading-7 tracking-wide">
            We believe in celebrating extraordinary achievements. WWR stands as
            a trusted platform for authentic certification, inspiring people
            from all fields to push boundaries and share their stories. A World
            Record Certificate is more than just recognition—it's a symbol of
            pride, a career booster, and a lasting legacy.
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            How It
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            Works
          </span>
        </div>
        <ProcessSteps steps={HowItWorksSteps} className="mx-auto" />
        <span className="self-stretch text-center justify-start text-sky-900 text-base font-bold font-['Montserrat'] tracking-wide">
          No complicated steps—just a straightforward way to document and share
          your achievement.
        </span>
      </div>

      <div className="flex flex-col gap-12 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            Benefits
          </span>
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            of a World Record Certificate
          </span>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {BenefitsData.map((benefit, index) => (
            <div
              className="px-7 py-5 bg-neutral-50 rounded-4xl border border-gray-200"
              key={index}
            >
              <div className="flex flex-col gap-6">
                <Icon
                  icon={benefit.icon}
                  className="size-16 text-sky-900 mx-auto"
                />
                <span className="text-center justify-start text-zinc-800 text-base font-medium font-['Montserrat'] leading-normal tracking-wide">
                  {benefit.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            Who Can
          </span>
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            Claim
          </span>
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            A World Record
          </span>
        </div>
        <span className="self-stretch text-center justify-start text-sky-900 text-base font-medium font-['Montserrat'] tracking-wide">
          Anyone can apply—students, athletes, professionals, creators,
          scientists, community leaders, and more. If you have a passion,
          talent, or extraordinary skill, you're eligible to claim a world
          record.
        </span>
        <Image src={AboutUsClaimIMG} alt="about us" className="w-4xl mx-auto" />
      </div>

      <div className="flex flex-col gap-6 px-28 max-w-7xl mx-auto">
        <div className="text-center justify-start">
          <span className="text-rose-600 text-5xl font-black font-['Montserrat'] tracking-widest">
            Collaborate
          </span>
          <span className="text-zinc-800 text-5xl font-black font-['Montserrat'] tracking-widest">
            {" "}
            with Us
          </span>
        </div>
        <span className="self-stretch text-center justify-start text-sky-900 text-base font-medium font-['Montserrat'] tracking-wide">
          If you're a public figure, influencer, business, or organization,
          collaborate with WWR to enhance visibility, build your brand, and
          connect with influential personalities. Let's work together to create
          awareness and celebrate achievements on a global scale.
        </span>
        <Button className="w-sm mx-auto text-base">Connect with team</Button>
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
