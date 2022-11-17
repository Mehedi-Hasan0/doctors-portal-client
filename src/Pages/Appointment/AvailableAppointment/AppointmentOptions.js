import React from 'react';

const AppointmentOptions = ({ appointment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card  shadow-lg">
            <div className="card-body gap-0 text-center">
                <h2 className="font-[poppins] text-primary text-center text-xl font-semibold mb-2">{name}</h2>
                <p className=' text-neutral font-[poppins] mb-2'>{slots.length > 0 ? slots[0] : 'Try Another Day!'}</p>
                <p className='font-[poppins] text-neutral mb-3'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none cursor-pointer font-semibold">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;