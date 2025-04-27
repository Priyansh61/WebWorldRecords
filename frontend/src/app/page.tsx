import Image from "next/image";
import { Button } from "./components/ui/button";
import LOGO from "@/assets/logo/logo.webp";
import { SearchBar } from "./components/ui/searchBar";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex justify-end">
          <Button
            variant="icon"
            className="py-4 px-5 gap-4 mt-6 mr-5 leading-normal"
          >
            <Icon icon="mage:light-bulb" className="size-8" />
            Inspirations
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 -mt-6">
          <Image src={LOGO} alt="Logo" className="size-36" />
          <div className="self-stretch text-center justify-start">
            <span className="text-sky-900 text-3xl font-black leading-loose tracking-wider">
              MAKE IT OR{" "}
            </span>
            <span className="text-rose-600 text-3xl font-black leading-loose tracking-wider">
              BREAK
            </span>
            <span className="text-sky-900 text-3xl font-black leading-loose tracking-wider">
              {" "}
              IT !
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-96 mt-14 bg-[url('../assets/home/home_search_background.webp')] bg-cover bg-center flex justify-center items-center">
        <div className="flex flex-col gap-8">
          <SearchBar className="w-[54rem]" />
          <div className="flex justify-center items-center gap-4">
            <Button variant="secondary" className="px-16">
              Trending
            </Button>
            <Button className="px-12">Make a Record</Button>
          </div>
        </div>
      </div>
    </>
  );
}
