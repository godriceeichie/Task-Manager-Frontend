import React from 'react';
import Typed from 'react-typed'
import taskIllustration from '../../../assets/img/project-manager-1024x708.png'

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-main-text">
                <Typed
                    className="typed-text"
                    strings={[
                        "Simplify Your Tasks",
                        "Maximize Your Productivity",
                        "Achieve Your Goals"
                    ]}
                    typeSpeed={150}
                    backSpeed={120}
                    loop
                    cursorClassName="typed-cursor"
                />
            </div>
            <div className='hero-main-img'>
                {/* <img src={taskIllustration} style={{objectFit: 'contain'}} alt="" /> */}
            </div>
        </section>
    );
}

export default Hero;
