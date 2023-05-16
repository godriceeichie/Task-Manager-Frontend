import React from 'react';
import { CloseButton } from '../../components';
import useTransition from '../../hooks/useTransition';
import { CSSTransition } from "react-transition-group";
import { Input, PasswordInput, Button, rem, TextInput } from '@mantine/core';
import { AiOutlineLock } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { loginSchema } from '../../schema';
import { useForm, zodResolver } from '@mantine/form';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
    const { showSignupHeading, showEmailBox, showPasswordBox, showForgottenPassword, showSignupButton, showSignedUp } = useTransition()
    const { login, error, isLoading } = useLogin()
    const loginForm = useForm({
        validate: zodResolver(loginSchema),
        initialValues: {
            email: "",
            password: ""
        }
    })
    const handleLoginSubmit = (data) => {
        // console.log(data)
        login(data)
        if(!error){
            loginForm.reset()
        }
    }
    return (
        <div className='login-wrapper'>
            <CloseButton />
            <div className="login-gradient">
                <form className='login' onSubmit={loginForm.onSubmit(data => {
                    
                    handleLoginSubmit(data)
                })}>
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
                        <TextInput
                            icon={<AiOutlineMail />}
                            label="Email"
                            placeholder="Your email"
                            radius="lg"
                            size="md"
                            name='email'
                            {...loginForm.getInputProps('email')}
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={showPasswordBox}
                        timeout={500}
                        classNames="password-box"
                        unmountOnExit
                    >
                        <div className="password-container">
                            <PasswordInput
                                label="Password"
                                placeholder="Password"
                                toggleTabIndex={0}
                                icon={<AiOutlineLock size="1rem" />}
                                radius="lg"
                                size="md"
                                visibilityToggleIcon={({ reveal }) =>
                                    reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                                }
                                name='password'
                                {...loginForm.getInputProps('password')}
                            />

                            {
                                error && <div className='errorMessage'>{error}</div>
                            }
                            <CSSTransition
                                in={showForgottenPassword}
                                timeout={500}
                                classNames="forgot-password-text"
                                unmountOnExit
                            >
                
                                <Link to={'/auth/forgot-password'} className="forgot-password-link">Forgot Password?</Link>
                            </CSSTransition>
                        </div>
                
                    </CSSTransition>

                
                    <section className="login__form-ending">
                        <CSSTransition
                            in={showSignupButton}
                            timeout={500}
                            classNames="signup-button"
                            unmountOnExit
                        >
                            <Button loading={isLoading}  styles={(theme) => ({root: {
                                width: rem(150),
                                height: rem(38),
                                fontSize: rem(19),
                            }})} 
                            type={'submit'}>
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
                                <Link to={'/auth/signup'}>Sign up</Link>
                            </p>
                        </CSSTransition>
                    </section>
                </form>
            </div>
        </div> 
    );
}

export default Login;
