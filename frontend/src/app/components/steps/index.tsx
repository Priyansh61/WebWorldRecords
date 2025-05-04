import { cn } from "@/lib/utils";

export default function ProcessSteps({
  steps,
  className,
}: {
  steps: { title: string; description: string }[];
  className?: string;
}) {
  return (
    <div className={cn("w-full flex justify-center px-20", className)}>
      <div className="flex w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col items-center relative"
          >
            {/* Line to the next step */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 right-0 w-1/2 border-t-2 border-dashed border-gray-400 z-0" />
            )}
            {index > 0 && (
              <div className="absolute top-5 left-0 w-1/2 border-t-2 border-dashed border-gray-400 z-0" />
            )}

            {/* Circle */}
            <div className="z-10 size-10 rounded-full bg-sky-900 flex items-center justify-center text-white">
              <div className="size-3 bg-white rounded-full" />
            </div>

            {/* Text */}
            <div className="mt-3 text-center mx-6">
              <div className="text-sky-900 font-bold text-base">
                {step.title}
              </div>
              <p className="mt-1 text-neutral-700 text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
