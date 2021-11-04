import React from 'react'
import Navigation from '../../shared/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
    return (
        <>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailableAppointments></AvailableAppointments>
        </>

    )
}

export default Appointment
