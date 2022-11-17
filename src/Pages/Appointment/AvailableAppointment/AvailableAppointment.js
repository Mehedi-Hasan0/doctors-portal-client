import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className=' mt-20 md:mx-12 mx-9'>
            <p className='font-[poppins] font-semibold text-xl text-secondary text-center md:mb-20 mb-10'>Available Appointments on {format(selectDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(appointment =>
                        <AppointmentOptions
                            key={appointment._id}
                            appointment={appointment}
                        ></AppointmentOptions>
                    )
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;