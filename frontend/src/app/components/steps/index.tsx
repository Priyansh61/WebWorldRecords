import { cn } from "@/lib/utils";

export default function ProcessSteps({
  steps,
  className,
}: {
  steps: { title: string; description: string }[];
  className?: string;
}) {
  return (
    <div className={cn("lg:w-full flex justify-center lg:px-20 px-6", className)}>
      <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex lg:flex-col flex-row lg:items-center items-start relative"
          >
            {/* Line to the next step */}
            {index < steps.length - 1 && (
              <>
                {/* Horizontal line for desktop */}
                <div className="hidden lg:block absolute top-5 right-0 w-1/2 border-t-2 border-dashed border-gray-400 z-0" />
                {/* Vertical line for mobile/tablet */}
                <div className="lg:hidden absolute top-11 left-5 h-full border-l-2 border-dashed border-gray-400 z-0" />
              </>
            )}
            {index > 0 && (
              <>
                {/* Horizontal line for desktop */}
                <div className="hidden lg:block absolute top-5 left-0 w-1/2 border-t-2 border-dashed border-gray-400 z-0" />
              </>
            )}

            {/* Circle */}
            <div className="z-10 size-10 rounded-full bg-sky-900 flex items-center justify-center text-white shrink-0">
              <div className="size-3 bg-white rounded-full" />
            </div>

            {/* Text */}
            <div className="lg:mt-3 text-center lg:mx-6 ml-4">
              <div className="text-sky-900 font-bold text-base lg:text-center text-start">
                {step.title}
              </div>
              <p className="mt-1 text-neutral-700 text-sm lg:text-center text-start">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
