import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";

export const buttonIconVariants = cva(
  `
  inline-flex items-center justify-center cursor-pointer transition group
`,
  {
    variants: {
      variant: {
        primary: "",
      },
      size: {
        sm: "w-8 h-8 p-1 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

 
export const buttonIconIconVariants = cva("transition", {
  variants: {
    variant: {
      primary: "fill-yellow hover:fill-yellow-dark",
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

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ className, variant, size, disabled })}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ size, variant })} svg={icon} />
    </button>
  );
}