import React from 'react';
import { Link } from 'react-router-dom'
import { Input } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';


const SignUp = () => {
    return (
        <section className='signup-wrapper'>
            <Link to={'/'} className='signup-close-btn'></Link>
            <div className="signup">
                <Input
                    icon={<AiOutlineMail />}
                    placeholder="Your email"
                    radius="lg"
                    size="md"
                />
            </div>
        </section>
    );
}

export default SignUp;
