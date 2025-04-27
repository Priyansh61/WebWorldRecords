import Image from "next/image";

export default function ResultCard({
  title,
  date,
  location,
  recordHolder,
  recordType,
  cardImage = "",
  tag,
}: {
  title: string;
  date: string;
  location: string;
  recordHolder: string;
  recordType: string;
  cardImage: string;
  tag: string;
}) {
  return (
    <div className="p-4 bg-white rounded-[32px] inline-flex flex-col justify-start items-start">
      <div className="relative flex flex-col justify-center items-start gap-4">
        <div className="w-72 h-44 flex justify-center items-center">
          <div className="px-2 py-1.5 left-2 top-2 absolute bg-neutral-900/50 rounded-lg backdrop-blur-2xl flex items-center">
            {tag && (
              <div className="text-white text-xs font-medium leading-none">
                {tag}
              </div>
            )}
          </div>
          <Image
            className="object-cover w-72 h-44 rounded-xl"
            src={cardImage}
            alt="Push-up Record" //TODO: Add alt text
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="w-72 flex flex-col justify-start items-center gap-1">
            <div className="self-stretch justify-start text-neutral-900 text-xl font-bold">
              {title}
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-3 flex-wrap content-center items-center">
              <div className="justify-start">
                <span className="text-zinc-800 text-sm font-medium leading-tight">
                  by{" "}
                </span>
                <span className="text-sky-900 text-sm font-medium leading-tight">
                  {recordHolder}
                </span>
              </div>
              <div className="w-px h-4 bg-zinc-800" />
              <div className="justify-start text-zinc-800 text-sm font-medium font-['Montserrat'] leading-tight">
                {recordType}
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-neutral-500 text-sm font-medium font-['Montserrat'] leading-tight">
              {date}
            </div>
            <div className="text-right justify-start text-neutral-500 text-sm font-medium font-['Montserrat'] leading-tight">
              {location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
