import React from 'react';
import { Input, Button, rem } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { Navbar } from '../components';


const ForgotPassword = () => {
    return (
        <>
            <Navbar />
            <div className="forgot-password-wrapper">
           
                <form action="" method="post" className="forgot-password">
                    <h1 className="forgot-password-heading">Forgot Password</h1>
                    <Input.Wrapper>
                        <Input
                            icon={<AiOutlineMail />}
                            label="Password"
                            placeholder="Your email"
                            radius="lg"
                            size="md"
                        />
                    </Input.Wrapper>
                    <Button color="green" styles={(theme) => ({root: {
                            width: rem(200),
                            height: rem(50),
                            fontSize: rem(19),
                            alignSelf: 'center',
                            marginTop: 20
                        }})}>
                            Reset Password
                    </Button>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
