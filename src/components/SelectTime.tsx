import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { useState } from "react";

const timeGroups = {
  Manhã: ["09:00", "10:00", "11:00"],
  Tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
  Noite: ["19:00", "20:00", "21:00"],
};

export const selectTimeVariants = cva(
  `
    border border-solid rounded-lg
    flex items-center justify-center cursor-pointer
    transition
  `,
  {
    variants: {
      state: {
        default: `
          bg-[color:var(--color-gray-600)]
          text-[color:var(--color-gray-200)]
          hover:bg-[color:var(--color-gray-500)]
          border-[color:var(--color-gray-500)]
        `,
        selected: `
          bg-[color:var(--color-gray-600)]
          !text-[color:var(--color-yellow)]
          border-[color:var(--color-yellow)]
        `,
        disabled: `
          bg-transparent
          text-[color:var(--color-gray-500)]
          border-[color:var(--color-gray-500)]
          pointer-events-none opacity-50
        `,
      },
      size: {
        md: "px-4 py-2",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
    },
  }
);

interface SelectTimeProps extends VariantProps<typeof selectTimeVariants> {
  className?: string;
  disabledTimes?: string[];
  onSelect?: (time: string) => void;
}

export default function SelectTime({
  className,
  disabledTimes = [],
  onSelect,
  size = "md",
}: SelectTimeProps) {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleClick = (time: string) => {
    setSelectedTime(time);
    onSelect?.(time);
  };

  return (
    <div className="flex flex-col gap-6">
      {Object.entries(timeGroups).map(([period, times]) => (
        <div key={period}>
          <p className={cx(textVariants({ variant: "text-sm" }), "mb-1 text-[color:var(--color-gray-200)]")}>
            {period}
          </p>
          <div className="flex flex-wrap gap-2">
            {times.map((time) => {
              const isDisabled = disabledTimes.includes(time);
              const isSelected = selectedTime === time;
              const state = isDisabled ? "disabled" : isSelected ? "selected" : "default";

              return (
                <button
                  key={time}
                  className={cx(
                    selectTimeVariants({ state, size }),
                    textVariants({ variant: "text-md" }),
                    className
                  )}
                  onClick={() => handleClick(time)}
                  disabled={isDisabled}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
