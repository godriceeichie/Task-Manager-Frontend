import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed'
import dashboardImg from '../../../assets/img/hero-dashboard.jpg'


const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-main-text">
                <h1 className="hero-main-heading">
                Effortlessly Boost Productivity. <span>Get More Done with Us.</span>
                </h1>
                <h2 className='hero-sub-heading'>Maximize Your Efficiency, Minimize Your Effort, and Achieve Your Goals with Us</h2>
                <div className='hero__signup-container'>
                    <input type="email" name="" className='hero__email' placeholder='Your email'/>
                    <button type='submit'>Get Started</button>
                </div>
            </div>
            <div className='hero-main-img' >
                <img src={dashboardImg} alt=""  className="hero-img" style={{objectFit: 'cover', borderRadius: '8px'}}/>
        
            </div>
        </section>
    );
}

export default Hero;
