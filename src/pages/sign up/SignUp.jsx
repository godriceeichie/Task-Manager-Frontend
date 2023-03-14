import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Input, PasswordInput, Button, rem, TextInput } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { CSSTransition } from "react-transition-group";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'

const SignUp = () => {
    const [showUsernameBox, setShowUsernameBox] = useState(false);
    const [showEmailBox, setShowEmailBox] = useState(false);
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowUsernameBox(true);
        }, 1000);
        setTimeout(() => {
            setShowEmailBox(true);
        }, 1500);

        setTimeout(() => {
            setShowPasswordBox(true);
        }, 2000);

        // Set a timer to show the sign-up button after 1.5 seconds
        setTimeout(() => {
            setShowSignupButton(true);
        }, 2500);
    }, []);
    return (
        <section className='signup-wrapper'>
            <Link to={'/'} className='signup-close-btn'></Link>
            <form className="signup">
                <h1 className='signup-heading'>Sign Up for Slick</h1>
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
                        width: rem(100),
                        alignSelf: 'center'
                    }})}>
                        Sign Up
                    </Button>
                </CSSTransition>        
                
            </form>
        </section>
    );
}

export default SignUp;
