import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import TrashIcon from "../assets/icons/trash.svg?react";
import Text from "../components/text";
import Icon from "./icon";

export const yourScheduleVariants = cva(
  `
    rounded-2xl
    flex
    flex-col
    gap-3
    w-full
  `,
  {
    variants: {
      variant: {
        primary: "bg-transparent border border-[color:var(--color-gray-600)]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ScheduleItem {
  time: string;
  name: string;
}

interface YourScheduleProps
  extends VariantProps<typeof yourScheduleVariants>,
    React.ComponentProps<"div"> {
  period: string;
  range: string;
  icon: React.ComponentProps<typeof Icon>["svg"];
  items: ScheduleItem[];
  onDelete?: (time: string) => void;
}

export const scheduleIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow-dark",
    },
    size: {
      sm: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export default function YourSchedule({
  period,
  range,
  icon,
  items,
  onDelete,
  variant,
  className,
  ...props
}: YourScheduleProps) {
  return (
    <div className={yourScheduleVariants({ variant, className })} {...props}>
      <div className="flex justify-between items-center border-b-2 p-4 border-[color:var(--color-gray-600)]">
        <div className="flex items-center gap-2">
          <Icon className={scheduleIconVariants({ size: "sm", variant })} svg={icon} />
          <Text className="!text-gray-300" variant="text-sm">
            {period}
          </Text>
        </div>
        <Text className="!text-gray-400" variant="text-sm">
          {range}
        </Text>
      </div>

      <div className="flex flex-col gap-2 mt-0 p-4">
        {items.map(({ time, name }) => (
          <div
            key={time}
            className="flex justify-between items-center bg-transparent py-1 rounded-xl"
          >
            <div className="flex items-center gap-4 w-full">
              <Text className="!text-gray-200 w-16 text-left" variant="title-md">
                {time}
              </Text>
              <Text className="!text-gray-200 flex-1" variant="text-md">
                {name}
              </Text>
            </div>
            <button
              onClick={() => onDelete?.(time)}
              className="text-[color:var(--color-gray-300)] hover:text-[color:var(--color-red-400)] transition-colors cursor-pointer"
            >
              <TrashIcon className="w-4 h-4 fill-yellow hover:fill-yellow-dark" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
