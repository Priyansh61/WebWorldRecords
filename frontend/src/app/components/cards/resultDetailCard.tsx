import Image from "next/image";
import PushupImg from "@/assets/pushup.webp";

export default function ResultDetailCard({
  recordHolder,
  imageUrl,
  date,
  location,
  tag,
}: {
  recordHolder: string;
  location: string;
  tag?: string;
  imageUrl: string;
  date: string;
}) {
  return (
    <div className="w-52 h-56 relative">
      <div className="w-52 h-30 left-0 top-[88px] absolute bg-neutral-50 rounded-xl" />
      <div className="w-44 left-[12px] top-0 absolute inline-flex flex-col justify-start items-start gap-3">
        <div className="w-46 h-28 bg-white rounded-xl">
          <Image
            src={imageUrl ? imageUrl : PushupImg}
            alt="Pushup"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          {tag && (
            <div className="px-2 py-1 bg-sky-900 rounded-lg outline outline-2 outline-offset-[-2px] outline-sky-900 inline-flex justify-end items-center gap-2.5">
              <span className="text-right justify-start text-white text-xs font-bold font-['Montserrat'] leading-none">
                {tag}
              </span>
            </div>
          )}
          <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
            <span className="self-stretch justify-start text-zinc-800 text-sm font-bold font-['Montserrat'] leading-normal">
              {recordHolder}
            </span>
            <div className="self-stretch inline-flex justify-between items-center">
              <span className="text-center justify-start text-neutral-500 text-xs font-medium font-['Montserrat'] leading-tight">
                {date}
              </span>
              <span className="text-right justify-start text-neutral-500 text-xs font-medium font-['Montserrat'] leading-tight">
                {location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
