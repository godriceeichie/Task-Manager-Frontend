import React from 'react';
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
                        "Exceed Limits",
                        "Achieve Your Goals"
                    ]}
                    typeSpeed={150}
                    backSpeed={120}
                    loop
                    cursorClassName="typed-cursor"
                />
            </div>
            <div className='hero-main-img' style={{backgroundColor: 'red'}}>
                {/* <img src={dashboardImg} alt="" width={500} className="hero-img" style={{objectFit: 'cover'}}/> */}
            </div>
        </section>
    );
}

export default Hero;
