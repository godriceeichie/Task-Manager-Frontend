import React from 'react';
import { Link } from 'react-router-dom'
import { Input, PasswordInput, Button, rem, TextInput } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { CSSTransition } from "react-transition-group";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { CloseButton } from '../../components';
import useTransition from '../../custom hooks/useTransition';

const SignUp = () => {
    const { showSignupHeading, showUsernameBox, showEmailBox, showPasswordBox, showSignupButton, showSignedUp } = useTransition()
    
    return (
        <section className='signup-wrapper'>
            <CloseButton />
            <form className="signup">
                <CSSTransition
                    in={showSignupHeading}
                    timeout={500}
                    classNames="signup-heading"
                    unmountOnExit
                >
                    <h1 className='signup-heading'>Sign Up for Slick</h1>
                </CSSTransition>
                <CSSTransition
                    in={showUsernameBox}
                    timeout={500}
                    classNames="username-box"
                    unmountOnExit
                >
                    <TextInput
                        placeholder="Your name"
                        label="Full name"
                        radius="lg"
                        size="md"
                        withAsterisk
                    />
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
                    <PasswordInput
                        required
                        label="Password"
                        placeholder="Password"
                        description="Password must include at least one letter, number and special character"
                        radius="lg"
                        size="md"
                        defaultValue=""
                        visibilityToggleIcon={({ reveal }) =>
                            reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                        }
                    />
                </CSSTransition>

                

                <CSSTransition
                    in={showSignupButton}
                    timeout={500}
                    classNames="signup-button"
                    unmountOnExit
                >
                    <Button color="green" styles={(theme) => ({root: {
                        width: rem(150),
                        height: rem(100),
                        fontSize: rem(19),
                        alignSelf: 'center'
                    }})}>
                        Sign Up
                    </Button>
                </CSSTransition>        
                <CSSTransition
                    in={showSignedUp}
                    timeout={500}
                    classNames="signed-up"
                    unmountOnExit
                >
                    <p className='already-signed-up'>Already have an account?&nbsp; 
                        <Link>Sign in</Link>
                    </p>
                </CSSTransition>
            </form>
        </section>
    );
}

export default SignUp;
