import React from 'react';
import bgImg from '../../assets/img/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner.jpg'

const Landing = ({children, url}) => {
    const background = { background : (url !== '') ? 'white' : `url(${bgImg})`}
    return (
        <div className='main-content' style={background}>
            { children }
        </div>
    );
}

export default Landing;