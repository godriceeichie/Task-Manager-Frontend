import React from 'react';
import { CloseButton } from '../components';
import useTransition from '../custom hooks/useTransition';
import { CSSTransition } from "react-transition-group";
import { Input, PasswordInput, Button, rem } from '@mantine/core';
import { AiOutlineLock } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Login = () => {
    const { showSignupHeading, showEmailBox, showPasswordBox, showForgottenPassword, showSignupButton, showSignedUp } = useTransition()
    return (
        <div className='login-wrapper'>
            <CloseButton />
            <form action="post" className='login'>
                <CSSTransition
                    in={showSignupHeading}
                    timeout={500}
                    classNames="signup-heading"
                    unmountOnExit
                >
                    <h1 className='signup-heading'>Welcome Back!</h1>
                </CSSTransition>
                
                <CSSTransition
                    in={showEmailBox}
                    timeout={500}
                    classNames="email-box"
                    unmountOnExit
                >
                    <Input.Wrapper label="Email" required>
                        <Input
                            icon={<AiOutlineMail />}
                            label="Password"
                            placeholder="Your email"
                            radius="lg"
                            size="md"
                        />
                    </Input.Wrapper>
                </CSSTransition> 

                <CSSTransition
                    in={showPasswordBox}
                    timeout={500}
                    classNames="password-box"
                    unmountOnExit
                >
                    <div className="password-container">
                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Password"
                            icon={<AiOutlineLock size="1rem" />}
                            radius="lg"
                            size="md"
                            defaultValue=""
                            visibilityToggleIcon={({ reveal }) =>
                                reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                            }
                        />
                        <CSSTransition
                            in={showForgottenPassword}
                            timeout={500}
                            classNames="forgot-password-text"
                            unmountOnExit
                        >
                        
                            <Link to={'/forgot-password'} className="forgot-password-link">Forgot Password?</Link>
                        </CSSTransition>
                    </div>
                    
                </CSSTransition>
                
                <CSSTransition
                    in={showSignupButton}
                    timeout={500}
                    classNames="signup-button"
                    unmountOnExit
                >
                    <Button color="green" styles={(theme) => ({root: {
                        width: rem(150),
                        height: rem(50),
                        fontSize: rem(19),
                        alignSelf: 'center',
                        marginTop: 40,
                    }})}>
                        Login
                    </Button>
                </CSSTransition>
                <CSSTransition
                    in={showSignedUp}
                    timeout={500}
                    classNames="signed-up"
                    unmountOnExit
                >
                    <p className='already-signed-up'>Don't have an account?&nbsp; 
                        <Link to={'/signup'}>Sign up</Link>
                    </p>
                </CSSTransition>
            </form>
        </div> 
    );
}

export default Login;
