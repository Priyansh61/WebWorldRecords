"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import LOGO from "@/assets/logo/logo.webp";
import { Icon } from "@iconify/react";
import { ReactTyped } from "react-typed";

function SearchBar({
  className,
  type = "text",
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "relative flex items-center bg-white rounded-4xl px-8 py-4",
        className
      )}
    >
      <div className="flex items-center flex-1">
        <Image src={LOGO} width={40} height={40} alt="Logo" />
        <ReactTyped
          parseRef={(ref) => ref.current.input}
          attr="placeholder"
          strings={[
            "Maximum pull-ups",
            "Minimum time taken",
            "Least time taken",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        >
          <input
            type={type}
            data-slot="input"
            className="border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-full text-zinc-800 text-xl font-medium leading-loose"
            {...props}
          />
        </ReactTyped>
      </div>
      <div className="flex items-center">
        <div className="px-3">
          <button className="cursor-pointer flex items-center">
            <Icon
              icon="material-symbols:mic"
              className="text-sky-900 size-9 cursor-pointer"
            />
          </button>
        </div>
        <div className="px-3">
          <button className="cursor-pointer flex items-center">
            <Icon
              icon="material-symbols:search-rounded"
              className="text-rose-600 size-9 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export { SearchBar };
