import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
import dashboardImg from '../../../assets/img/hero-dashboard-img.jpg'


const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-main-text">
                <h1 className="typed-text">
                    Get your tasks done with {' '}
                    <Typed
                        strings={['ease', 'efficacy', 'speed']}
                        typeSpeed={150}
                        backSpeed={150}
                        loop
                        cursorClassName="typed-cursor"
                    />
                </h1>
                {/* <Link to={'/signup'} className='sign-up-btn'>Get Started</Link> */}
            </div>
            <div className='hero-main-img' >
                <img src={dashboardImg} alt="" width={600} className="hero-img" style={{objectFit: 'cover', borderRadius: '8px'}}/>
                
            </div>
        </section>
    );
}

export default Hero;
