import Image from "next/image";
import LeftIcon from "@/assets/icons/left-icon.svg";
import Logo from "@/assets/logo/logo.webp";
import { Button } from "../ui/button";

export default function HeaderWithIMG({
  title,
  buttonText,
  backgroundImage = "../assets/images/hand-shake.webp",
}: {
  title: string;
  buttonText: string;
  backgroundImage: string;
}) {
  return (
    <div
      className="bg-cover bg-center bg-[url('../assets/images/hand-shake.webp')]"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="relative grid grid-cols-3 justify-center items-start gap-8 w-full px-12 pb-14 pt-9">
        <div className="p-3 bg-neutral-50 rounded-3xl inline-flex justify-start items-center w-fit">
          <Image src={LeftIcon} alt="left icon" className="size-5" />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <Image src={Logo} alt="logo" className="size-20" />
          <span className="text-center justify-start text-white text-4xl font-black font-['Montserrat'] leading-[48px] tracking-widest">
            {title}
          </span>
        </div>

        <div className="flex justify-end">
          <Button className="px-12 py-3">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
}
