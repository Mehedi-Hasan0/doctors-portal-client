import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            reviews: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. Before fluoride was added to toothpaste, studies found that people with fluoridated water were 40 to 60 percent less likely to get cavities.',
            location: 'California',
            img: people1
        },
        {
            id: 2,
            name: 'Jessica Roy',
            reviews: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
            location: 'Dhaka',
            img: people2
        },
        {
            id: 3,
            name: 'Merry Koshem',
            reviews: "It was a great check up. They fixed my illness completely. Beyond what regular services. Really glad to choose their services",
            location: 'New York',
            img: people3
        },
    ]

    return (
        <section className=' mt-20 '>
            <div className=' flex justify-between items-center md:mx-14'>
                <div>
                    <h4 className='font-[poppins] md:text-xl text-lg text-secondary font-bold'>Testimonial</h4>
                    <h2 className=' font-[poppins] text-neutral md:text-4xl text-3xl mt-3'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} alt="icon" className=' lg:w-48 md:w-36 w-[100px]' />
                </figure>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;