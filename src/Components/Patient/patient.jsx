import React from 'react';
import './patient.css';
import { GoPrimitiveDot } from "react-icons/go";

const Patient = () => {
    return (
        <div className="patient__container">
            <div className="patient__about__us">
                <h3>testimonial</h3>
                <h1>Patients Say About Us</h1><br /><br />
            </div>
            <div className="patient__comment">
                <div className="patient__image">
                    <img src="https://media.istockphoto.com/photos/silhouette-of-profile-guy-in-shirt-with-white-button-in-aqua-menthe-picture-id1206439390?k=20&m=1206439390&s=170667a&w=0&h=wDX4xov95UOzjOgOkTqRurDiTepjhqAA7Q2iFofrO5c=" alt="prof" />
                </div>
                <div className="patient__dot__lorem__name">
                    <div className="patient__dots">
                        <GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot /><GoPrimitiveDot />
                    </div>
                    <div className="patient__lorem">
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat excepturi quae est modi, quaerat velit adipisci corrupti. Neque fugit necessitat</h3>
                    </div>
                    <div className="patient__name">
                        <h1>Roberta Fitzgerald</h1>
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
        
    );
}

export default Patient;