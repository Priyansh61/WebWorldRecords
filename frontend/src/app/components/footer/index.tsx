import { footerData } from "@/constants/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 bg-neutral-50 inline-flex justify-center items-center gap-8">
      {footerData.map((item, index) => (
        <span className="flex justify-center items-center gap-2.5" key={index}>
          <Link
            className="justify-start text-sky-900 text-base font-medium leading-normal"
            href={item.path}
          >
            {item.name}
          </Link>
        </span>
      ))}
    </footer>
  );
}
