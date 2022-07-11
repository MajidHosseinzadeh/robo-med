import React from 'react';
import './footer.css';
import { AiOutlineInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__top">
                <div className="footer__robo__med__social">
                    <div>
                    <h1>RoboMed</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat excepturi quae est modi, quaerat velit adipisci corrupti. Neque fugit necessitat</h3>
                    <br /><br />
                    </div>
                    <div className="footer__social__media">
                        <ul>
                            <li><a className='footer__social__link' href="#"><AiOutlineInstagram /></a></li>
                            <li><a className='footer__social__link' href="#"><FaWhatsapp /></a></li>
                            <li><a className='footer__social__link' href="#"><TbBrandTelegram /></a></li>
                            <li><a className='footer__social__link' href="#"><AiOutlineYoutube /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer__contacts">
                    <div className="footer__tel">
                        <h5 id='tel'>(330) 718 - 8690</h5>
                        <label htmlFor="tel"><BsTelephone /></label>
                    </div>
                    <div className="footer__tel">
                        <h5 id='email'>HospitalAdmin@gmail.com</h5>
                        <label htmlFor="email"><HiOutlineMail /></label>
                    </div>
                    <div className="footer__tel">
                        <h5 id='loc'>Kegs 69 Str. 15234, Chalandri Athens Greece</h5>
                        <label htmlFor="loc"><HiOutlineLocationMarker /></label>
                    </div>
                    <div className="footer__email"></div>
                    <div className="footer__location"></div>
                </div>
            </div>
            <div className="footer__bottom">
                <h4>©2022 Global Access Telehealth. All Rights Reserved.Privacy Policy</h4>
            </div>
        </footer>
    );
}

export default Footer;