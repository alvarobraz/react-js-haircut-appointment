export const APPOINTMENTS_KEY = 'appointments'

export enum AppointmentsState {
  Creating = 'creating',
  Created = 'created',
}

export interface Appointment {
  id: string
  date: string
  hour: string
  client: string
  state?: AppointmentsState
}
