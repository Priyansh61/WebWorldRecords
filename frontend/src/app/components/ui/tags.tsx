export default function Tags({
  active = false,
  text,
}: {
  active?: boolean;
  text: string;
}) {
  return (
    <div
      className={`px-5 py-3 ${active ? "bg-sky-900/10" : "bg-white"} rounded-[32px] outline ${active ? "outline-2 outline-offset-[-2px] outline-sky-900" : "outline-1 outline-offset-[-1px] outline-gray-200"} inline-flex justify-center items-center cursor-pointer`}
    >
      <span
        className={`justify-start text-sky-900 text-sm ${active ? "font-bold" : "font-medium"} leading-tight`}
      >
        {text}
      </span>
    </div>
  );
}
