import React from 'react';
import'./email.css';

const Email = () => {
    
    return ( 
        <div className="email__container">
            <div className="email__subscribe__us">
                <h3>Newsletter Subscribe</h3>
                <h1>To Get More News Subscribe Us</h1>
            </div>
            <div className="email__input__button">
                <input type="email" placeholder='E-Mail' className='email__input'/>
                <button type='submit' className='email__button'>Subscribe</button>
            </div>
        </div>
     );
}

export default Email;