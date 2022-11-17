import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';

const BookingModal = ({ treatment, setTreatment, selectDate }) => {
    const { name, slots } = treatment; // treatment is appointmentOptions just different name
    const date = format(selectDate, 'PP');
    const { register, handleSubmit } = useForm();

    const handleBooking = data => {
        console.log(data);
        setTreatment(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-neutral ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit(handleBooking)} className='grid grid-cols-1 gap-5 mt-6'>
                        <input type="text" {...register('appointmentDate')} value={date} className="input w-full bg-gray-200 text-neutral font-[poppins] font-medium  input-bordered  disabled" />
                        <select name='slot' {...register('slot')} className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} {...register('slot')} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input {...register('PatientName', { required: true })} name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input {...register('email', { required: true })} name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input {...register('phone', { required: true })} name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className=' w-full btn btn-neutral' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;