import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
import dashboardImg from '../../../assets/img/hero-dashboard-img.jpg'


const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-main-text">
                <h1 className="typed-text">
                    Get More Done In Less Time!
                </h1>
                <p>Achieve your dreams with the help of our powerful task management tools</p>
            </div>
            <div className='hero-main-img' >
                <img src={dashboardImg} alt=""  className="hero-img" style={{objectFit: 'cover', borderRadius: '8px'}}/>
        
            </div>
        </section>
    );
}

export default Hero;
