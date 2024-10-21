import React, { useEffect, useState } from 'react';
import './Welcom-page.scss'; 
import BtnItem from '../../../Btn-item/Btn-tem';
import diana from './img/Diana.jpg'

function WelcomePage() {
    const [isBlack, setIsBlack] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlack(prev => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container">
                <div className="welcom-page-box">

                    <div className="row">
                        <div className="coll-50">
                            <div className="circle-item">
                                <div className="circles">
                                    <div className={`circle ${isBlack ? 'black' : 'gray'}`}></div>
                                    <div className={`circle ${isBlack ? 'gray' : 'black'}`}></div>
                                </div>
                            </div>
                            <div className="welcom-page-text">
                                <h1 className='welcom-page-text-heading'>Helping refine your business offerings and translate them into stories that sell</h1>
                                <p className='welcom-page-text-text'>Achieve success with our dedicated digital marketing agency, committed to driving higher ROI and innovative strategies that will elevate your business to new levels of growth and prosperity.</p>
                            </div>
                            <BtnItem />
                        </div>
                        <div className="coll-50">
                            <div className="diana">
                                <img src={diana} alt="diana" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WelcomePage;
