import React, { useState } from 'react'
import Navigation from '../../shared/Navigation/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </>

    )
}

export default Appointment
