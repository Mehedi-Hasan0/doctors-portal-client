import React from 'react';
import bgImg from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero">
            <img src={bgImg} className="lg:block hidden w-full opacity-5 lg:h-[90vh] h-[60vh]" alt="" />
            <div className="-z-10 hero-content flex-col lg:flex-row-reverse mx-2 md:my-6 my-4">
                <img src={bgImg} className="lg:w-1/2 sm:w-[90%] w-full rounded-lg shadow-2xl" alt='' />
                <div className=' sm:px-[5%] lg:px-0 lg:mr-6 my-6'>
                    <h1 className=" font-[poppins] lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-neutral">Your New Smile Starts Here</h1>
                    <p className="md:py-6 py-4 font-[poppins] text-neutral md:text-base sm:text-sm text-xs opacity-90">We are committed to provide you a happy and white smile in your face. Come and get your healthy smile today by booking a checkup today!!</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;