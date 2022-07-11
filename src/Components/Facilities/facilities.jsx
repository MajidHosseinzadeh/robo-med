import React from 'react';
import './facilities.css';
import { GoPrimitiveDot } from "react-icons/go";

const Facilities = () => {
    return (
        <div className='facilitie__container'>
            <div className="facilitie__information">
                <h3>Healthcare Facilities</h3>
                <h1>Our Last Healthcare Facilities</h1>
                <br/>
                <br/>
            </div>
            <div className="facilitie__hospital__clinic">
                <div className="facilitie__hospital__clinic__children">
                    <div className="facilitie__name__flag">
                        <h1 className='facilitie__name__flag__h1'>Monkind Medicare</h1>
                        <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="france" className='facilitie__name__flag__img' />
                    </div>
                    <div>
                        <h3 className='facilitie__lorem'>Lore ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</h3>
                        <div className="facilitie__dot__location">
                            <GoPrimitiveDot className='facilitie__dot' />
                            <h3 className='facilitie__location'>Hospital</h3>
                        </div>
                    </div>
                </div>
                <div className="facilitie__hospital__clinic__children__clinic">
                    <div className="facilitie__name__flag">
                        <h1 className='facilitie__name__flag__h1'>Monkind Medicare</h1>
                        <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="france" className='facilitie__name__flag__img' />
                    </div>
                    <div>
                        <h3 className='facilitie__lorem'>Lore ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</h3>
                        <div className="facilitie__dot__location__even">
                            <GoPrimitiveDot className='facilitie__dot' />
                            <h3 className='facilitie__location'>Clinic</h3>
                        </div>
                    </div>
                </div>
                <div className="facilitie__hospital__clinic__children">
                    <div className="facilitie__name__flag">
                        <h1 className='facilitie__name__flag__h1'>Monkind Medicare</h1>
                        <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="france" className='facilitie__name__flag__img' />
                    </div>
                    <div>
                        <h3 className='facilitie__lorem'>Lore ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</h3>
                        <div className="facilitie__dot__location">
                            <GoPrimitiveDot className='facilitie__dot' />
                            <h3 className='facilitie__location'>Hospital</h3>
                        </div>
                    </div>
                </div>
                <div className="facilitie__hospital__clinic__children__clinic">
                    <div className="facilitie__name__flag">
                        <h1 className='facilitie__name__flag__h1'>Monkind Medicare</h1>
                        <img src="https://flagicons.lipis.dev/flags/4x3/fr.svg" alt="france" className='facilitie__name__flag__img' />
                    </div>
                    <div>
                        <h3 className='facilitie__lorem'>Lore ipsum dolor sit amet, consectetur adipiscing elit. Auctor ornare gravida non arcu. Pellentesque tempor et dictum ut</h3>
                        <div className="facilitie__dot__location__even">
                            <GoPrimitiveDot className='facilitie__dot' />
                            <h3 className='facilitie__location'>Clinic</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facilities;