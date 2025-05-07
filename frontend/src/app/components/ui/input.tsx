import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  labelIcon?: React.ReactNode;
}

function Input({ className, label, type, labelIcon, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-1 items-center">
        {labelIcon && (
          <div className="size-8 flex items-center justify-center">
            {labelIcon}
          </div>
        )}
        <label className="p-1 text-sky-900 md:text-base text-sm font-extrabold leading-normal tracking-wide">
          {label}
        </label>
      </div>
      {type === "phoneNumber" ? (
        <div className="flex gap-2 items-center w-full">
          <div className="px-4 py-2 bg-neutral-50 rounded-4xl outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-2.5">
            <span className="justify-start text-neutral-500 md:text-base text-sm font-normal font-['Montserrat'] leading-normal tracking-wide">
              +91
            </span>
          </div>
          <input
            type="number"
            data-slot="input"
            className={cn(
              "self-stretch w-full px-4 py-2 bg-neutral-50 rounded-4xl outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-2.5 placeholder:text-neutral-500 md:placeholder:text-base placeholder:text-sm placeholder:font-normal text-zinc-800 md:text-base text-sm font-medium leading-normal tracking-wide [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              className
            )}
            {...props}
          />
        </div>
      ) : (
        <input
          type={type}
          data-slot="input"
          className={cn(
            "self-stretch px-4 py-2 bg-neutral-50 rounded-[32px] outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-2.5 placeholder:text-neutral-500 md:placeholder:text-base placeholder:text-sm placeholder:font-normal text-zinc-800 md:text-base text-sm font-medium leading-normal tracking-wide",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
}

export { Input };
