import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className=' mt-20 md:mx-14'>
            <div className=' flex justify-between items-center'>
                <div>
                    <h4 className='font-[poppins] md:text-xl text-lg text-secondary font-bold'>Testimonial</h4>
                    <h2 className=' font-[poppins] text-neutral md:text-4xl text-3xl mt-3'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} alt="icon" className=' lg:w-48 md:w-36 w-[100px]' />
                </figure>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;