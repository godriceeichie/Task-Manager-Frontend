import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
import dashboardImg from '../../../assets/img/hero-dashboard-img.jpg'


const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-main-text">
                <Typed
                    className="typed-text"
                    strings={[
                        "Simplify Your Tasks",
                        "Exceed Your Limits",
                        "Achieve Your Goals"
                    ]}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                    cursorClassName="typed-cursor"
                />
                <Link to={'/signup'} className='sign-up-btn'>Get Started</Link>
            </div>
            <div className='hero-main-img' >
                <img src={dashboardImg} alt="" width={600} className="hero-img" style={{objectFit: 'cover', borderRadius: '8px'}}/>
                
            </div>
        </section>
    );
}

export default Hero;
