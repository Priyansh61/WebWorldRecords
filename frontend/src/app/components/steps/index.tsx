export default function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center gap-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center mb-8"
          >
            {/* Circle icon */}
            <div className="relative flex items-center w-full">
              <div className="flex justify-center items-center w-full">
                <div className="size-12 rounded-full bg-sky-900 flex items-center justify-center text-white z-10">
                  <div className="size-4 bg-white rounded-full" />
                </div>
              </div>
              {/* Connecting dotted line */}
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-32 h-0 border-t-3 border-dashed border-gray-400 w-full"></div>
              )}
            </div>

            {/* Title */}
            <span className="mt-4 text-sky-900 text-base font-bold font-['Montserrat'] leading-normal tracking-wide">
              {step.title}
            </span>

            {/* Description */}
            <p className="mt-2 self-stretch text-center justify-start text-neutral-900 text-sm font-medium font-['Montserrat'] leading-none tracking-wide">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
