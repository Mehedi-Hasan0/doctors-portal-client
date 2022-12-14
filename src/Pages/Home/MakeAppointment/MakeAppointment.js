import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section
            className=' md:mt-56 mt-28'
            style={
                {
                    background: `url(${appointment})`
                }
            }
        >

            <div className="hero">
                <div className="hero-content flex-col lg:flex-row relative">
                    <img src={doctor} className=" absolute bottom-0 left-0 -mt-32 hidden lg:block md:w-1/2 rounded-lg -z-10" alt='' />
                    <div className=' md:py-16 py-6 md:px-7 px-3 lg:ml-[500px] z-10'>
                        <h4 className='font-[poppins] text-primary text-lg font-bold'>Appointment</h4>
                        <h1 className=" font-[poppins] text-4xl text-white font-medium my-6">Make an appointment Today</h1>
                        <p className="my-6 text-white md:text-base text-sm">Dedicated 24X7 call center to set appointments with your preferred doctor. Queries regarding doctors’ appointment schedule, earliest available doctors and other appointment related information are provided through the appointment desk. Our trained, experienced and skilled appointment desk executives will assist you to get doctors’ appointments at your convenient schedule, answer your queries regarding all kinds of medical services and guide you how to avail them.</p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none cursor-pointer">Appointment</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;