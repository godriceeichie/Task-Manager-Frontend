import React from 'react';
import { Input, Button, rem } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { CloseButton } from '../../components';



const ForgotPassword = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="forgot-password-wrapper">
                <CloseButton />
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
                           
                        }})}>
                            Reset Password
                    </Button>
                    <Link to={'/auth/login'} style={{alignSelf: 'center'}}>
                        Go Back to Login
                        <AiOutlineArrowRight />
                    </Link>
                </form>
            </div>
        </>
    );
}

export default ForgotPassword;
