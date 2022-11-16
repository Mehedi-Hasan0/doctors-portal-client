import React from 'react';
import bgImg from '../../../assets/images/appointment.png';
import { useForm } from 'react-hook-form';

const ContactUs = () => {

    const { register, handleSubmit } = useForm();

    const submit = (data, e) => {
        console.log(data);
        const form = e.target;
        form.reset();
    }

    return (
        <section
            className=' mt-36'
            style={
                {
                    background: `url(${bgImg})`
                }
            }
        >
            <div className=' md:py-16 py-9'>
                <div className=' md:mb-9 mb-6'>
                    <h4 className='font-[poppins] text-secondary md:text-lg text-base font-bold text-center mb-2'>Contact Us</h4>
                    <h2 className=" font-[poppins] sm:text-4xl text-2xl text-white font-medium text-center my-6">Stay Connected With Us</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit(submit)}>
                        <div className=' flex flex-col lg:w-[50%] sm:w-[70%] w-[90%] mx-auto  text-black'>
                            <input type="email" name="email" placeholder='Email Address' className=' my-5 p-4 rounded-lg' {...register("email", { required: true })} />
                            <input type="text" name='subject' placeholder='Subject' className='mb-5 p-4 rounded-lg' {...register("submit", { required: true })} />
                            <input type="text" name='message' placeholder='Your Message' className=' mb-9 py-8 px-4 rounded-lg' {...register("message", { required: true })} />
                        </div>
                        <div className='flex'>
                            <button className="mx-auto btn bg-gradient-to-r from-secondary to-primary text-white border-none">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;