import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectDate }) => {
    return (
        <section className=' mt-16'>
            <p className='font-[poppins] font-semibold text-xl text-secondary text-center'>Available Appointments on {format(selectDate, 'PP')}</p>
        </section>
    );
};

export default AvailableAppointment;