export const APPOINTMENTS_KEY = 'appointments'

export const AppointmentsState = {
  Creating: 'creating',
  Created: 'created',
} as const

export type AppointmentsState = (typeof AppointmentsState)[keyof typeof AppointmentsState]

export type Appointment = {
  id: string
  date: string
  hour: string
  client: string
  state?: AppointmentsState
}
