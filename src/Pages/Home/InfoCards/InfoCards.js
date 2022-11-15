import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening hours',
            description: 'Open 9.00am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Visit our locations',
            description: 'Ashulia, Savar, Dhaka-1347',
            icon: marker,
            bgClass: 'bg-neutral'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+950 1544-345-23',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                >

                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;