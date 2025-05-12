import { SearchBar } from "@/components/ui/searchBar";
import Tags from "@/components/ui/tags";
import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import ResultCard from "@/components/cards/resultCard";
import CardImage from "@/assets/1.webp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function TrendingSearches({ className }: { className?: string }) {
  return (
    <>
      <div
        className={cn(
          "flex md:flex-col flex-col-reverse md:justify-between max-md:gap-8 items-start",
          className
        )}
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch inline-flex md:justify-start justify-center items-center gap-2">
            <div className="max-md:text-center text-zinc-800 text-base font-bold leading-tight">
              Trending Searches
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div
              data-property-1="Default"
              className="inline-flex justify-center items-center gap-2.5"
            >
              <div className="justify-start text-neutral-500 text-base font-medium leading-tight">
                minimum
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch inline-flex justify-center items-center gap-2.5"
            >
              <div className="flex-1 justify-start text-neutral-500 text-base font-medium leading-tight">
                maximum pull-ups done in one minute
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch inline-flex justify-center items-center gap-2.5"
            >
              <div className="flex-1 justify-start text-neutral-500 text-base font-medium leading-tight">
                least time taken to finish one sandwich
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch inline-flex justify-center items-center gap-2.5"
            >
              <div className="flex-1 justify-start text-neutral-500 text-base font-medium leading-none">
                most number
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch inline-flex justify-center items-center gap-2.5"
            >
              <div className="flex-1 justify-start text-neutral-500 text-base font-medium leading-none">
                maximum time taken
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-gray-200 md:hidden flex" />
        <div className="self-stretch flex md:flex-col justify-start items-center gap-2">
          <Button>Make a Record</Button>
          <Button variant="link">Break A Record</Button>
        </div>
      </div>
      <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-gray-200 md:hidden flex" />
    </>
  );
}

export default function Results() {
  return (
    <div className="h-screen">
      <div className="md:h-24 h-[4.5rem] bg-sky-900 w-full max-md:px-6">
        <SearchBar className="md:left-12 md:top-14 top-13 shadow-[0px_0px_10px_0px_rgba(51,51,51,0.10)] md:w-6xl w-full" />
      </div>
      <div className="flex md:pt-[4.5rem] pt-14 md:px-12 px-6 md:gap-14 gap-12 w-full justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-8 justify-between">
            <div className="flex md:gap-8 gap-5 items-center">
              <div className="md:p-3 p-2.5 bg-neutral-50 rounded-3xl inline-flex justify-start items-center">
                <Image src={LeftIcon} alt="left icon" className="md:size-5 size-4" />
              </div>
              <div className="flex md:gap-4 gap-2.5 items-center">
                <Tags text="All (3)" active={true} />
                <Tags text="Sports (6)" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:gap-10 gap-8 md:pl-16 max-md:px-2 overflow-y-auto h-[calc(100vh-17rem)] scrollbar-hide w-full">
            <div className="flex flex-wrap gap-x-4 gap-y-2.5 max-md:justify-center max-md:items-center">
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
            <TrendingSearches className="flex md:hidden" />
            <div className="flex flex-col gap-4">
              <span className="self-stretch max-md:text-center text-rose-600 text-base font-bold leading-normal">
                Explore similar
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-3 max-md:justify-center max-md:items-center">
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
        <TrendingSearches className="hidden md:flex" />
      </div>
    </div>
  );
}
