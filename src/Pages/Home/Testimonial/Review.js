import React from 'react';

const Review = ({ review }) => {
    const { name, reviews, img, location } = review;
    return (
        <div className="card shadow-xl md:mt-20 mt-16">
            <div className="card-body">
                <p className='font-[poppins] text-neutral'>{reviews}</p>
                <div className=" flex items-center mt-9">
                    <div className="avatar mr-4 ">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='avatar' />
                        </div>
                    </div>
                    <div>
                        <h5 className='font-[poppins] text-lg text-black'>{name}</h5>
                        <p className='font-[poppins] text-sm text-black opacity-80'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;