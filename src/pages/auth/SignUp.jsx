import React from 'react';
import { Link } from 'react-router-dom'
import { Input, PasswordInput, Button, rem, TextInput } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { CSSTransition } from "react-transition-group";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { CloseButton } from '../../components';
import useTransition from '../../custom hooks/useTransition';
import { useForm, zodResolver } from '@mantine/form';
import { signUpSchema } from '../../schema';

const SignUp = () => {
    const { showSignupHeading, showUsernameBox, showEmailBox, showPasswordBox, showSignupButton, showSignedUp } = useTransition()

    const signUpForm = useForm({
        validate:zodResolver(signUpSchema),
        initialValues:{
            username:"",
            password:"",
            email:""
        }
    })

    function handleSignUpSubmit(data){
        console.log(data)
    }       
    
    return (
        <section className='signup-wrapper'>
            <CloseButton />
            <form className="signup" onSubmit={signUpForm.onSubmit(data => handleSignUpSubmit(data))}>
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
                        placeholder="Enter username"
                        label="Username"
                        radius="lg"
                        size="md"
                        name='username'
                        withAsterisk
                        {...signUpForm.getInputProps("username")}

                    />
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
                        {...signUpForm.getInputProps("email")}

                    />
                   
                </CSSTransition> 

                <CSSTransition
                    in={showPasswordBox}
                    timeout={500}
                    classNames="password-box"
                    unmountOnExit
                >
                    <PasswordInput
                        {...signUpForm.getInputProps("password")}
                        label="Password"
                        placeholder="Password"
                        description="Password must include at least one letter, number and special character"
                        radius="lg"
                        size="md"
                        visibilityToggleIcon={({ reveal }) =>
                            reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                        }
                        name='password'

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
                        height: rem(50),
                        fontSize: rem(19),
                        alignSelf: 'center',
                        // marginTop: signUpForm.onSubmit(data => {
                        //     if(data.username.length <= 2){
                        //         return 0
                        //     }
                        //     else{
                        //         return 100
                        //     }
                        // })
                    }})}
                    type="submit"
                    >
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
                        <Link to={'/login'}>Login</Link>
                    </p>
                </CSSTransition>
            </form>
        </section>
    );
}

export default SignUp;
