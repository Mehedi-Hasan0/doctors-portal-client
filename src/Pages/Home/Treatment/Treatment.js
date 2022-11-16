import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <div className=' my-32'>
            <div className=' flex lg:flex-row flex-col items-center lg:px-20 px-7'>
                <img className=' rounded-lg lg:w-[40%] md:w-[80%] w-full lg:mr-24' src={treatmentImg} alt="" />
                <div className=' md:mx-[9%] lg:mx-0 mt-9 lg:mt-0'>
                    <h2 className='font-[poppins] font-bold lg:text-5xl md:text-4xl text-3xl text-neutral lg:leading-[55px]'>Exceptional Dental Care, on Your Terms</h2>
                    <p className=' font-[poppins] text-neutral md:text-base text-sm opacity-80 my-8'>The risk of tooth decay, gum disease and tooth loss can be reduced with good oral hygiene, a low-sugar and acid diet, wearing a mouthguard when playing sport, and regular visits to the dentist. It is generally recommended that everyone, including young children, visit the dentist twice every year. Modern techniques mean that dental treatment is fairly comfortable.</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Treatment;