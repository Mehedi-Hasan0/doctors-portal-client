import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className=' my-32'>
            <div className=' flex lg:flex-row flex-col items-center lg:px-20 px-7'>
                <img className=' rounded-lg lg:w-[40%] md:w-[80%] w-full lg:mr-24' src={treatmentImg} alt="" />
                <div className=' md:mx-[9%] lg:mx-0 mt-9 lg:mt-0'>
                    <h2 className='font-[poppins] font-bold lg:text-5xl md:text-4xl text-3xl text-neutral lg:leading-[55px]'>Exceptional Dental Care, on Your Terms</h2>
                    <p className=' font-[poppins] text-neutral md:text-base text-sm opacity-80 my-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;