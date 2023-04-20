import React from 'react';
import { Link } from 'react-router-dom'

const CloseButton = () => {
    return (
        <>
            <Link to={'/'} className='signup-close-btn'></Link>
        </>
    );
}

export default CloseButton;
