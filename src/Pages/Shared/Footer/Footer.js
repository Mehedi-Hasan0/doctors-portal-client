import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer
            className=" text-neutral"
            style={{
                background: `url(${footerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className='md:p-16 p-9 footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Teeth Whitening</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>

                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link to='/' className="link link-hover">NewYork - 101010 Hudson</Link>
                </div>
            </div>
            <div className=' text-center mb-3'>
                <p className=' text-neutral md:text-base text-sm'>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;