import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

 
export const cardVariants = cva(
  `
      
  `,
  {
    variants: {
      variant: {
        primary: "bg-[color:var(--color-gray-700)]",
        secondary: "bg-transparent"
      },
      size: {
        none: "",
        md: "p-20",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "none",
    },
  }
);

interface CardProps
  extends VariantProps<typeof cardVariants>,
    React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = "div",
  size,
  variant,
  children,
  className,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, variant, className }),
      ...props,
    },
    children
  );
}