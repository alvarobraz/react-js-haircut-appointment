import React from 'react'
import Text from '../components/text'
import SelectDate from './SelectDate'

import Calendar from '../assets/icons/calendar-blank.svg?react'

interface DataContentProps {
  title?: string
  onSelectDate?: (date: string) => void
  initialDate?: string
}

export default function DateContent({ title, onSelectDate, initialDate }: DataContentProps) {
  const [selectedDate, setSelectedDate] = React.useState<string>(initialDate || '')

  function handleSelectDate(date: string) {
    setSelectedDate(date)
    console.log('Data selecionada:', date)
    onSelectDate?.(date)
  }

  React.useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate)
      onSelectDate?.(initialDate)
    }
  }, [initialDate, onSelectDate])

  return (
    <>
      {title && (
        <Text className='!text-gray-200' variant='title-md'>
          {title}
        </Text>
      )}

      <SelectDate
        icon={Calendar}
        iconVariant='primary'
        onSelect={handleSelectDate}
        size={'md'}
        initialDate={selectedDate}
      />
    </>
  )
}
