import { cva, cx, type VariantProps } from "class-variance-authority";
import { textVariants } from "./text";
import Icon from "./icon";


export const inputTextVariants = cva(
  `
    border border-solid border-gray-500 focus:border-gray-500
    bg-transparent rounded-lg  flex items-center justify-center text-left
  `,
  {
    variants: {
      size: {
        md: "pb-2 py-2 px-2 pl-8 pt-[11px]",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },
    defaultVariants: {
      size: "md",
      disabled: false,
    },
  }
);


export const inputIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow",
    },
    size: {
      sm: "w-4 h-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

interface InputTextProps
  extends VariantProps<typeof inputTextVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
      icon: React.ComponentProps<typeof Icon>["svg"];
      iconVariant: VariantProps<typeof inputIconVariants>["variant"];
    }

export default function InputText({
  size,
  disabled,
  className,
  icon,
  iconVariant = "primary",
  ...props
}: InputTextProps) {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-2">
        <Icon
          svg={icon}
          className={inputIconVariants({ variant: iconVariant, size: "sm" })}
        />
      </div>
      <input
        className={cx(
          inputTextVariants({ size, disabled }),
          textVariants(),
          className
        )}
        {...props}
      />
    </div>
  );
}