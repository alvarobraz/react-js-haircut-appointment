import { cva, cx, type VariantProps } from 'class-variance-authority'
import { textVariants } from './text'
import Icon from './icon'
import { useEffect, useRef, useState } from 'react'

const getDateOptions = () => {
  const dates = []
  const today = new Date()
  for (let i = 0; i <= 3; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const formatted = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`
    dates.push(formatted)
  }
  return dates
}

const dateOptions = getDateOptions()

const getTodayDate = () => {
  return dateOptions[0]
}

export const selectDataVariants = cva(
  `
    w-full border border-solid rounded-lg
    bg-transparent text-left
    flex items-center
  `,
  {
    variants: {
      state: {
        default: `
          bg-[color:var(--color-gray-600)]
          text-[color:var(--color-gray-200)]
          hover:bg-transparent
          border-none
          cursor-pointer
          focus-visible:bg-transparent
          focus-visible:border-none
          focus-visible:outline-none
        `,
        selected: `
          bg-[color:var(--color-gray-600)]
          text-[color:var(--color-yellow)]
          border-[color:var(--color-yellow)]
        `,
        disabled: `
          bg-transparent
          border-[color:var(--color-gray-500)]
          pointer-events-none opacity-50
        `,
      },
      size: {
        md: 'px-2 py-2 pl-8 pr-8',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  }
)

export const selectDateVariants = cva(
  `
    absolute top-full left-0 w-full
    bg-[color:var(--color-gray-600)]
    text-[color:var(--color-gray-200)]
    border border-solid border-[color:var(--color-gray-500)]
    rounded-lg
    cursor-pointer z-10
    mt-1
  `,
  {
    variants: {
      state: {
        default: '',
        disabled: 'pointer-events-none opacity-50',
      },
      size: {
        md: 'px-4 py-2',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'md',
    },
  }
)

export const inputIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-[color:var(--color-yellow)]',
    },
    size: {
      sm: 'w-4 h-4',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

interface SelectDtaProps extends VariantProps<typeof selectDataVariants> {
  className?: string
  disabled?: boolean
  icon: React.ComponentProps<typeof Icon>['svg']
  iconVariant?: VariantProps<typeof inputIconVariants>['variant']
  onSelect?: (date: string) => void
  initialDate?: string
}

export default function SelecionarData({
  className,
  disabled = false,
  icon,
  iconVariant = 'primary',
  onSelect,
  initialDate,
  size = 'md',
}: SelectDtaProps) {
  const defaultDate = initialDate || getTodayDate()
  const [selectedDate, setSelectedDate] = useState<string | null>(defaultDate)
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    if (!disabled) setIsOpen(!isOpen)
  }

  const handleSelect = (date: string) => {
    setSelectedDate(date)
    setIsOpen(false)
    onSelect?.(date)
  }

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate)
      onSelect?.(initialDate)
    }
  }, [initialDate, onSelect])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (initialDate && initialDate !== selectedDate) {
      setSelectedDate(initialDate)
    }

    if (initialDate === '') {
      const today = getTodayDate()
      setSelectedDate(today)
      onSelect?.(today)
    }
  }, [initialDate, onSelect])

  return (
    <div ref={containerRef} className='relative flex items-center w-[full] select-date-container'>
      <div className='absolute left-2'>
        <Icon svg={icon} className={inputIconVariants({ variant: iconVariant, size: 'sm' })} />
      </div>

      <div
        className={cx(
          selectDataVariants({
            state: selectedDate ? 'selected' : 'default',
            size,
          }),
          textVariants({ variant: 'text-md' }),
          className
        )}
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') toggleDropdown()
        }}
      >
        {selectedDate || 'Selecione uma data'}
      </div>

      {isOpen && (
        <ul
          className={cx(
            selectDateVariants({
              state: disabled ? 'disabled' : 'default',
              size,
            }),
            textVariants({ variant: 'text-md' })
          )}
          role='listbox'
        >
          {dateOptions.map((date) => (
            <li
              key={date}
              role='option'
              aria-selected={selectedDate === date}
              className={cx(
                'px-4 py-2 cursor-pointer hover:bg-[color:var(--color-gray-500)]',
                selectedDate === date &&
                  'bg-[color:var(--color-gray-500)] text-[color:var(--color-yellow)]'
              )}
              onClick={() => handleSelect(date)}
            >
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
