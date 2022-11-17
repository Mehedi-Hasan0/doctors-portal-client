import bgImg from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {
    return (
        <header>
            <div className="hero">
                <img src={bgImg} className="lg:block hidden w-full opacity-5 lg:h-[90vh]" alt="background -z-50" />
                <div className="z-10 hero-content flex-col-reverse justify-evenly md:flex-row-reverse mx-2 md:my-6 my-4">
                    <img src={bgImg} className="lg:w-1/2 md:w-[50%] w-full rounded-lg shadow-2xl" alt='dentist chair' />
                    <div className=' sm:px-[5%] lg:px-0 lg:mr-6 my-6'>
                        <DayPicker
                            className=' text-neutral'
                            mode='single'
                            selected={selectDate}
                            onSelect={setSelectDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;