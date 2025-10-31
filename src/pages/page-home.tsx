import React from 'react'
import Card from '../components/card'
import Container from '../components/container'
import LogoImage from '../assets/images/logo-hair-day.svg?react'
import SunIcon from '../assets/icons/sun-horizon.svg?react'
import CloudSun from '../assets/icons/cloud-sun.svg?react'
import MooStars from '../assets/icons/moon-stars.svg?react'

import TitleAndSubTitle from './title-and-subtitle'
import Form from './form'
import DateContent from '../components/date-content'
import YourSchedule from '../components/yourSchedule'

import useLocalStorage from 'use-local-storage'
import { APPOINTMENTS_KEY, type Appointment } from '../models/appointments'
import useAppointments from '../hooks/use-appointments'

export default function PageHome() {
  // Date
  const [appointmentDate, setAppointmentDate] = React.useState('')

  const { getTodayDateFormatted, deleteAppointment } = useAppointments()
  const firstDate = getTodayDateFormatted()

  function handleSelectAppointmentDate(date: string) {
    setAppointmentDate(date ? date : firstDate)
  }

  // Periods and apoointments
  const [appointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])

  const filteredAppointments = appointments.filter(
    (appointment) => appointment.date === appointmentDate
  )

  const getHour = (appointment: Appointment) => parseInt(appointment.hour.split(':')[0], 10)

  const morningAppointments = filteredAppointments.filter((appointment) => {
    const hour = getHour(appointment)
    return hour >= 9 && hour <= 11
  })

  const afternoonAppointments = filteredAppointments.filter((appointment) => {
    const hour = getHour(appointment)
    return hour >= 13 && hour <= 18
  })

  const nightAppointments = filteredAppointments.filter((appointment) => {
    const hour = getHour(appointment)
    return hour >= 19 && hour <= 21
  })

  // Delete
  function handleDeleteAppointment(id: string) {
    console.log('id =>' + id)
    deleteAppointment(id)
  }

  return (
    <Container className='flex flex-col md:flex-row justify-center items-start min-h-screen gap-4 p-4'>
      <LogoImage className='relative left-31 top-[-15px]' />
      <Card size={'md'} className='w-[498px] px-20 py-20 rounded-lg'>
        <TitleAndSubTitle
          title='Agende um atendimento'
          subtitle='Selecione data, horário e informe o nome do cliente para criar o agendamento'
        />
        <Form />
      </Card>
      <Card size={'none'} className='w-[906px] px-20 py-20 rounded-lg bg-transparent'>
        <div className='flex justify-between items-start w-full'>
          <TitleAndSubTitle
            title='Sua agenda'
            subtitle='Consulte os seus cortes de cabelo agendados por dia'
          />
          <DateContent
            onSelectDate={handleSelectAppointmentDate}
            initialDate={appointmentDate ? appointmentDate : firstDate}
          />
        </div>
        <div className='flex flex-col justify-between items-start w-full mt-7 gap-5'>
          <YourSchedule
            icon={SunIcon}
            period='Manhã'
            range='09h - 12h'
            items={morningAppointments}
            onDelete={(id) => handleDeleteAppointment(id)}
          />
          <YourSchedule
            icon={CloudSun}
            period='Tarde'
            range='13h - 18h'
            items={afternoonAppointments}
            onDelete={(id) => handleDeleteAppointment(id)}
          />
          <YourSchedule
            icon={MooStars}
            period='Noite'
            range='19h - 21h'
            items={nightAppointments}
            onDelete={(id) => handleDeleteAppointment(id)}
          />
        </div>
      </Card>
    </Container>
  )
}
