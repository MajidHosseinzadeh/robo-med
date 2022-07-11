import React from 'react';
import './feature.css';


const Feature = () => {
    return (
        <div className='feature__container'>
            <div className='feature__information__logo'>
                <div className="feature__information">
                    <h1>Your Health Is Our Top Priority</h1>
                    <h3>Lore ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare <br/> gravida non arcu. Pellentesque tempor et dictum ut </h3>
                    <br/><br/>
                    <button className='feature__submit__button'>Login to System</button>
                    <br/><br/>
                </div>
                <div className="feture__logo">
                    <img src="https://i.ibb.co/fvYC31F/robo-med.png" alt="robo" />
                </div>
            </div>
            <div className="feature__items__container">
                <div className="feature__items__childeren">
                    <h1>+216</h1>
                    <h3>Healthcare Facility</h3>
                </div>
                <div className="feature__items__childeren">
                    <h1>+423</h1>
                    <h3>Professional Doctor</h3>
                </div>
                <div className="feature__items__childeren">
                    <h1>+669</h1>
                    <h3>Staff all around the world</h3>
                </div>
            </div>
        </div>
    );
}

export default Feature;