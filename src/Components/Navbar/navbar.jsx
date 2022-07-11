import React , { useState }from 'react';
import './navbar.css';

const Navbar = () => {

    const [active, setActive] = useState("navbar__section__ul__menu");
    const [togglerIcon, setTogglerIcon] = useState("nav__toggler");

    const navToggle = () => {
        active === "navbar__section__ul__menu"
            ? setActive("navbar__section__ul__menu navbar__sections__ul__active")
            : setActive("navbar__section__ul__menu");
        togglerIcon === ("nav__toggler")
            ? setTogglerIcon("nav__toggler toggle")
            : setTogglerIcon("nav__toggler");
    }

    return (
        <nav className='navbar__container'>
            <div className='navbar__robo__med__logo'>
                <a href="#">
                    <img src="https://i.ibb.co/fvYC31F/robo-med.png" alt="robo" />
                    <h1>RoboMed</h1>
                </a>
            </div>
            <div className='navbar__ul__container'>
                <ul className={active}>
                    <li className='navbar__sections__list'><a href="#" className='navbar__sections'>Home</a></li>
                    <li className='navbar__sections__list'><a href="#" className='navbar__sections'>Registration Form</a></li>
                    <li className='navbar__sections__list'><a href="#" className='navbar__sections'>About</a></li>
                    <li className='navbar__sections__list'><a href="#" className='navbar__sections'>Service</a></li>
                    <li className='navbar__sections__list'><a href="#" className='navbar__sections'>FAQ</a></li>
                </ul>
            </div>
            <div onClick={navToggle} className={togglerIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;