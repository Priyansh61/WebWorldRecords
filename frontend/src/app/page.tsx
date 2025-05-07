import Image from "next/image";
import { Button } from "./components/ui/button";
import LOGO from "@/assets/logo/logo.webp";
import { SearchBar } from "./components/ui/searchBar";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <div className="max-md:pt-10">
        <div className="md:flex justify-end hidden">
          <Button
            variant="icon"
            className="md:py-4 md:px-5 gap-3 mt-6 mr-5 leading-normal flex items-center"
          >
            <Icon icon="mage:light-bulb" className="size-7 -mt-1" />
            Inspirations
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:-mt-6">
          <Image src={LOGO} alt="Logo" className="md:size-32 size-24" />
          <div className="self-stretch text-center justify-start md:text-3xl text-2xl font-black">
            <span className="text-sky-900 leading-loose tracking-wider">
              MAKE IT OR{" "}
            </span>
            <span className="text-rose-600 leading-loose tracking-wider">
              BREAK
            </span>
            <span className="text-sky-900 leading-loose tracking-wider">
              {" "}
              IT !
            </span>
          </div>
        </div>
      </div>
      <div className="w-full md:h-96 px-7 h-72 mt-14 bg-[url('../assets/home/home_search_background.webp')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col md:gap-8 gap-4 justify-center items-center w-full">
          <SearchBar className="lg:w-[54rem] w-full" />
          <div className="flex justify-center items-center md:gap-4 gap-2">
            <Button variant="secondary" className="md:px-16">
              Trending
            </Button>
            <Button className="md:px-12">Make a Record</Button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center mt-20 mb-6">
        <Button
          variant="icon"
          size="icon"
          className="gap-3 leading-normal items-center"
        >
          <Icon icon="mage:light-bulb" className="md:size-7 size-6 -mt-1" />
          Inspirations
        </Button>
      </div>
    </>
  );
}
