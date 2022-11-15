import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist.',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth, deep within the roots.',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
            icon: whitening,
        }
    ]
    return (
        <div className=' md:my-32 my-20'>
            <div className=' mb-16'>
                <h3 className=' text-secondary font-[poppins] font-bold sm:text-xl text-lg text-center uppercase'>Our Services</h3>
                <h2 className=' font-[poppins] text-neutral text-center sm:text-4xl text-3xl py-2'>Services We Provide</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;