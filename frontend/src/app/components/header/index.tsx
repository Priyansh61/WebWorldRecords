import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import Logo from "@/assets/logo/logo.webp";

export default function Header() {
  return (
    <div className="inline-flex flex-col justify-start items-center gap-5 w-full md:px-12 px-4 pt-9">
      <div className="flex justify-between items-center gap-8 w-full">
        <div className="md:p-3 p-2.5 bg-neutral-50 rounded-3xl inline-flex justify-start items-center">
          <Image src={LeftIcon} alt="left icon" className="md:size-5 size-4 shrink-0" />
        </div>
        <div className="flex md:gap-6 gap-3 items-center">
          <Image src={Logo} alt="logo" className="md:size-14 size-12" />
          <div className="text-center justify-start md:text-[26px] text-base font-black">
            <span className="text-sky-900 font-['Montserrat'] leading-loose tracking-wider">
              MAKE IT OR{" "}
            </span>
            <span className="text-rose-600 font-['Montserrat'] leading-loose tracking-wider">
              BREAK
            </span>
            <span className="text-sky-900 font-['Montserrat'] leading-loose tracking-wider">
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
