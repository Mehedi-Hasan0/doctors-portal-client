import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../../assets/icons/menu.svg';
import close from '../../../assets/icons/close.svg';
import './Navbar.css';
import { AuthContext } from '../../../context/AuthProvider';
import useAdmin from '../../../hook/useAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [toggle, setToggle] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className=' max-w-7xl mx-auto'>
            <div className=' p-5 hidden lg:flex flex-row items-center justify-between'>
                <p className=' font-[poppins] font-medium text-xl text-black'>Doctors Portal</p>
                <div className='flex justify-evenly w-[50%] font-[poppins] text-base text-black'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/appointment">Appointment</Link>
                    {
                        user?.email ? <Link to="/dashboard">Dashboard</Link> : ''
                    }
                    <Link to="/contactUS">Contact Us</Link>
                </div>
                <div>
                    {
                        user?.email ?
                            <Link to="/login"><button onClick={handleLogout} className=' btn btn-md btn-info btn-outline font-[poppins] mr-5'>Sign out</button></Link>
                            :

                            <Link to="/login"><button className='btn btn-md btn-info font-[poppins] text-white'>Login</button></Link>
                    }
                </div>
            </div>
            <div className=' flex items-center justify-between lg:hidden p-5' >
                <p className=' font-[poppins] font-medium text-xl text-black'>Doctors Portal</p>
                <div>
                    <img src={toggle ? close : menu} className=" w-6 h-6 object-contain" alt="" onClick={() => setToggle((previous) => !previous)} />

                    <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#181818] absolute top-0 right-0 w-full h-full flex-col items-end text-center opacity-90 z-50 `}>
                        <img src={toggle ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain mb-7 cursor-pointer' onClick={() => setToggle((previous) => !previous)} />
                        <div className='flex flex-col font-[poppins] uppercase md:text-lg text-base text-white z-40 bg-[#181818] w-full mobile-nav-link relative'>

                            <Link to='/'>Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/appointment">Appointment</Link>
                            <div className="dropdown dropdown-bottom">
                                <label tabIndex={0}><Link>Dashboard</Link></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-[#181818] rounded-box w-full text-center opacity-95">
                                    <li><Link to='/dashboard' className=' text-white'>My Appointment</Link></li>
                                    {
                                        isAdmin && <>

                                            <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                        </>
                                    }
                                </ul>
                            </div>
                            <Link to="/reviews">Reviews</Link>
                            <Link to="/contactUS">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;