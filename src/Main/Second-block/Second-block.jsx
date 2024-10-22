import React, { useEffect, useRef } from 'react';
import './Second-block.scss';

function SecondBlock() {
    const boxesRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        });

        const boxes = boxesRef.current;
        boxes.forEach(box => {
            observer.observe(box);
        });

        return () => {
            boxes.forEach(box => {
                observer.unobserve(box);
            });
        };
    }, []);

    return (
        <div className="container">
            <div className="second-page">
                <div className="second-page-box box-left box-blue" ref={el => boxesRef.current[0] = el}>
                    <div className="second-page-heading">
                        <h2>Your business keeps looking for new solutions but still gets</h2>
                    </div>
                    <ol className="second-page-list">
                        <li>Poor lead quality</li>
                        <li>Difficulty converting leads</li>
                        <li>Challenges increasing customer lifetime value</li>
                        <li>Endless strategy meetings without results</li>
                        <li>Low ROI from marketing and sales efforts</li>
                    </ol>
                </div>

                <div className="second-page-box box-right box-ohra" ref={el => boxesRef.current[1] = el}>
                    <div className="second-page-heading">
                        <h2>If so, we may help</h2>
                    </div>
                    <div className="second-page-item">
                        <p>Imagine business consultants who speak the languages of business analysis, sales, marketing, and technology. Most importantly, though, we speak the language of your business value, helping align your teams, processes, and messaging.</p>
                    </div>
                </div>

                <div className="second-page-box box-left box-black" ref={el => boxesRef.current[2] = el}>
                    <div className="second-page-heading">
                        <h2>Common results of our work in 3-6 months</h2>
                    </div>
                    <ol className="second-page-list">
                        <li>Lead quality:<span> + 15 - 30%</span></li>
                        <li>Sales cycle time: <span>- 10 - 30%</span></li>
                        <li>Engagement: <span>+ 10 - 25%</span></li>
                        <li>Conversion rates: <span>+ 5 - 15%</span></li>
                        <li>Internal alignment efficiency: <span>+ 20 - 40%</span></li>
                        <li>Customer acquisition cost: <span>- 10 - 20%</span></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default SecondBlock;
