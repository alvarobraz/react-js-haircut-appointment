import { cva, type VariantProps } from 'class-variance-authority'
import Icon from './icon'
import Text from './text'

export const buttonVariants = cva(
  `
    flex items-center justify-center cursor-pointer
    transition rounded-lg group gap-2
  `,
  {
    variants: {
      variant: {
        primary: 'bg-yellow hover:bg-yellow-light',
      },
      size: {
        md: 'h-14 py-4 px-34',
      },
      disabled: {
        true: 'opacity-30 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
)

export const buttonTextVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-sm text-gray-900',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>['svg']
}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonVariants({ className, disabled, size, variant })} {...props}>
      <Text variant='title-lg' className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  )
}
