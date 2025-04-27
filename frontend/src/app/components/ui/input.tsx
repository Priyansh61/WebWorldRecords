import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  title,
  type,
  labelIcon,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        {labelIcon && (
          <div className="size-8 flex items-center justify-center">
            {labelIcon}
          </div>
        )}
        <label className="p-1 text-sky-900 text-base font-extrabold leading-normal tracking-wide">
          {title}
        </label>
      </div>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "self-stretch h-10 px-4 py-2 bg-neutral-50 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-2.5 placeholder:text-neutral-500 placeholder:text-base placeholder:font-normal text-zinc-800 text-base font-medium leading-normal tracking-wide",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
