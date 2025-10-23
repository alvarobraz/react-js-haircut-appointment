import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import { useState } from "react";

const timeSlots = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "13:00","13:30","14:00","14:30","15:00","15:30",
  "16:00","16:30","17:00","17:30","18:00","18:30",
  "19:00","19:30","20:00","20:30","21:00"
];


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
    <div className="flex flex-wrap gap-2">
      {timeSlots.map((time) => {
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
  );
}
