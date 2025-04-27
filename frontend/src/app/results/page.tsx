import { SearchBar } from "@/components/ui/searchBar";
import Tags from "@/components/ui/tags";
import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import ResultCard from "@/components/cards/resultCard";
import CardImage from "@/assets/1.webp";
import { Button } from "@/components/ui/button";
import ThreeLineIcon from "@/assets/icons/three-line.svg";

export default function Results() {
  return (
    <div className="h-screen">
      <div className="h-28 bg-sky-900" />
      <SearchBar className="left-[48px] top-[64px] absolute shadow-[0px_0px_10px_0px_rgba(51,51,51,0.10)] w-6xl" />
      <div className="flex pt-[4.5rem] px-12 gap-14 w-full justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-8 justify-between">
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

          <div className="flex flex-col gap-10 pl-16 overflow-y-auto h-[calc(100vh-17rem)] scrollbar-hide">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {Array(5)
                .fill({
                  recordHolder: "Darshan Kaushal",
                  location: "Haryana, India",
                  date: "18/04/2019",
                  tag: "Current",
                  title: "Maximum one hand push-ups in one minute",
                  cardImage: CardImage,
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
            </div>
            <div className="flex flex-col gap-4">
              <span className="self-stretch justify-start text-rose-600 text-base font-bold leading-normal">
                Explore similar
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {Array(5)
                  .fill({
                    recordHolder: "Darshan Kaushal",
                    location: "Haryana, India",
                    date: "18/04/2019",
                    tag: "Current",
                    title: "Maximum one hand push-ups in one minute",
                    cardImage: CardImage,
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
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col justify-between items-start">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="justify-start text-zinc-800 text-sm font-bold leading-tight">
                Trending Searches
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                data-property-1="Default"
                className="inline-flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-neutral-500 text-sm font-medium leading-tight">
                  minimum
                </div>
              </div>
              <div
                data-property-1="Default"
                className="self-stretch inline-flex justify-center items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-neutral-500 text-sm font-medium leading-tight">
                  maximum pull-ups done in one minute
                </div>
              </div>
              <div
                data-property-1="Default"
                className="self-stretch inline-flex justify-center items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-neutral-500 text-sm font-medium leading-tight">
                  least time taken to finish one sandwich
                </div>
              </div>
              <div
                data-property-1="Default"
                className="self-stretch inline-flex justify-center items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-neutral-500 text-sm font-medium leading-none">
                  most number
                </div>
              </div>
              <div
                data-property-1="Default"
                className="self-stretch inline-flex justify-center items-center gap-2.5"
              >
                <div className="flex-1 justify-start text-neutral-500 text-sm font-medium leading-none">
                  maximum time taken
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <Button>Make a Record</Button>
            <Button variant="text" className="underline">
              Break A Record
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
