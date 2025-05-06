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
        "relative flex items-center bg-white md:rounded-4xl rounded-2xl md:px-8 md:py-4 px-4 py-2",
        className
      )}
    >
      <div className="flex items-center flex-1 w-full">
        <Image src={LOGO} alt="Logo" className="md:size-10 size-6" />
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
          className="w-full"
        >
          <input
            type={type}
            data-slot="input"
            className="border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4 h-full text-zinc-800 md:text-xl text-sm font-medium leading-loose w-full"
            {...props}
          />
        </ReactTyped>
      </div>
      <div className="flex items-center">
        <div className="md:px-3 px-1">
          <button className="cursor-pointer flex items-center">
            <Icon
              icon="material-symbols:mic"
              className="text-sky-900 md:size-9 size-6 cursor-pointer"
            />
          </button>
        </div>
        <div className="md:px-3 px-1">
          <button className="cursor-pointer flex items-center">
            <Icon
              icon="material-symbols:search-rounded"
              className="text-rose-600 md:size-9 size-6 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export { SearchBar };
