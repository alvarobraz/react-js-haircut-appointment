import useLocalStorage from 'use-local-storage'
import { type Appointment, APPOINTMENTS_KEY } from '../models/appointments'

export default function useAppointment() {
  const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])

  function deleteAppointment(id: string) {
    setAppointments(appointments.filter((appointment) => appointment.id !== id))
  }

  function getTodayDateFormatted() {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
  }

  return {
    appointments,
    deleteAppointment,
    getTodayDateFormatted,
  }
}
