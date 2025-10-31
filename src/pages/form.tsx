import React from 'react'
import Button from '../components/button'
import DateContent from '../components/date-content'
import InputText from '../components/input-text'
import SelectTime from '../components/SelectTime'
import Text from '../components/text'
import useLocalStorage from 'use-local-storage'
import UserSquare from '../assets/icons/user-square.svg?react'
import useAppointments from '../hooks/use-appointments'

import { APPOINTMENTS_KEY, AppointmentsState, type Appointment } from '../models/appointments'

export default function Form() {
  const { getTodayDateFormatted } = useAppointments()

  function getCurrentTimeInMinutes() {
    const now = new Date()
    return now.getHours() * 60 + now.getMinutes()
  }

  const TODAY_DATE = getTodayDateFormatted()

  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])
  const firstDate = TODAY_DATE

  // Date
  const [appointmentDate, setAppointmentDate] = React.useState(firstDate)

  function handleSelectAppointmentDate(date: string) {
    setAppointmentDate(date ? date : firstDate)
  }

  const isSelectedDateToday = appointmentDate === TODAY_DATE

  const currentTimeInMinutes = isSelectedDateToday ? getCurrentTimeInMinutes() : -1

  // Hour
  const [appointmentHour, setAppointmentHour] = React.useState('')

  function handleAppointmentHour(hour: string) {
    setAppointmentHour(hour)
  }

  // Client
  const [appointmentClient, setAppointmentClient] = React.useState('')

  function handleChangeAppointmentClient(e: React.ChangeEvent<HTMLInputElement>) {
    setAppointmentClient(e.target.value || '')
  }

  // Save
  function handleSaveAppointment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setAppointments([
      ...appointments,
      {
        id: Math.random().toString(36).substring(2, 9),
        date: appointmentDate,
        hour: appointmentHour,
        client: appointmentClient,
        state: AppointmentsState.Created,
      },
    ])
    setAppointmentDate('')
    setAppointmentClient('')
    setAppointmentHour('')
  }

  return (
    <>
      <form onSubmit={handleSaveAppointment}>
        <div className='flex flex-col gap-2 mt-6'>
          <DateContent
            title='Data'
            onSelectDate={handleSelectAppointmentDate}
            initialDate={appointmentDate ? appointmentDate : firstDate}
          />

          <Text className='!text-gray-200 mt-4' variant='title-md'>
            Horários
          </Text>

          <SelectTime
            disabledTimes={appointments
              .filter((appointment) => appointment.date === appointmentDate)
              .map((appointment) => appointment.hour)}
            selectedHour={appointmentHour}
            onSelect={handleAppointmentHour}
            isToday={isSelectedDateToday}
            currentTimeInMinutes={currentTimeInMinutes}
          />

          <div className='flex flex-col gap-2 mt-6'>
            <Text className='!text-gray-200' variant='title-md'>
              Cliente
            </Text>
            <InputText
              icon={UserSquare}
              value={appointmentClient}
              onChange={handleChangeAppointmentClient}
              iconVariant='primary'
              placeholder='Nome do Cliente'
              size='md'
              className='w-full'
            />
            <Button className='mt-6' type='submit'>
              AGENDAR
            </Button>
          </div>
        </div>
      </form>
    </>
  )
}
