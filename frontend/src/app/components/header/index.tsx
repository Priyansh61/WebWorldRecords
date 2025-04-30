import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import Logo from "@/assets/logo/logo.webp";

export default function Header() {
  return (
    <div className="inline-flex flex-col justify-start items-center gap-5 w-full px-12">
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
      <div className="w-full h-0 outline-1 outline-offset-[-0.50px] outline-gray-200" />
    </div>
  );
}
