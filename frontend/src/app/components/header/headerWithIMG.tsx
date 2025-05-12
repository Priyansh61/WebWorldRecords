import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import Logo from "@/assets/logo/logo.webp";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function HeaderWithIMG({
  title,
  buttonText,
  backgroundImage = "../assets/images/hand-shake.webp",
  className,
}: {
  title: string;
  buttonText?: string;
  backgroundImage: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-cover bg-center bg-[url('../assets/images/hand-shake.webp')] flex flex-col justify-center items-center md:px-12 md:pb-14 md:pt-9 p-6 gap-8 min-h-68",
        className
      )}
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative flex justify-center items-start w-full">
        <div className="absolute left-0 md:p-3 p-2.5 bg-neutral-50 rounded-3xl inline-flex justify-start items-center w-fit">
          <Image src={LeftIcon} alt="left icon" className="md:size-5 size-4" />
        </div>
        <div className="flex flex-col md:gap-6 gap-4 items-center justify-center">
          <Image src={Logo} alt="logo" className="size-24" />
          <span className="text-center justify-start text-white md:text-4xl text-2xl font-black font-['Montserrat'] tracking-widest">
            {title}
          </span>
        </div>
        <div className="absolute right-0">
          {buttonText && (
            <Button className="px-12 py-3 md:flex hidden">{buttonText}</Button>
          )}
        </div>
      </div>
      {buttonText && (
        <Button className="px-8 py-2 md:hidden flex">{buttonText}</Button>
      )}
    </div>
  );
}
