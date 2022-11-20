import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectDate, refetch }) => {
    const { user } = useContext(AuthContext);
    const { name, slots } = treatment; // treatment is appointmentOptions just different name
    const date = format(selectDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.appointmentDate.value;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                toast.success('Booking confirmed!');
                refetch();
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal text-neutral ">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-6'>
                        <input type="text" name='appointmentDate' readOnly value={date} className="input w-full bg-gray-200 text-neutral font-[poppins] font-medium  input-bordered  disabled" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" placeholder="Your Name" disabled defaultValue={user?.displayName} className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email Address" disabled defaultValue={user?.email} className="input w-full input-bordered" />
                        <input name='phone' type="number" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className=' w-full btn btn-neutral' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;