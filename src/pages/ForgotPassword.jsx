import React from 'react';
import { Input } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-wrapper">
            <form action="" method="post" className="forgot-password">
                <h1>Forgot Password</h1>
                <Input.Wrapper label="Email">
                    <Input
                        icon={<AiOutlineMail />}
                        label="Password"
                        placeholder="Your email"
                        radius="lg"
                        size="md"
                    />
                </Input.Wrapper>
            </form>
        </div>
    );
}

export default ForgotPassword;
