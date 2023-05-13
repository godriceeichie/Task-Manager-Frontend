import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Input, PasswordInput, Button, rem, TextInput } from '@mantine/core';
import { AiOutlineMail } from 'react-icons/ai';
import { CSSTransition } from "react-transition-group";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md'
import { CloseButton } from '../../components';
import useTransition from '../../hooks/useTransition';
import { useForm, zodResolver } from '@mantine/form';
import { signUpSchema } from '../../schema';
import { request } from '../../config';
import PasswordBox from '../../components/container/PasswordBox';


const SignUp = () => {
    const { showSignupHeading, showUsernameBox, showEmailBox, showPasswordBox, showSignupButton, showSignedUp } = useTransition()

    const [requestUpdate, setRequestUpdate] = useState({ isLoading: false });

    useEffect(() => {
        console.log(requestUpdate)
    }, [requestUpdate])


    const signUpForm = useForm({
        validate: zodResolver(signUpSchema),
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    function handleSignUpSubmit(data) {
        console.log(data)
        setRequestUpdate({ ...requestUpdate, isLoading: true })

        request.post('/user/create', data)
            .then(res =>
                setRequestUpdate({ ...requestUpdate, res, isLoading: false })
            )
            .catch(err => setRequestUpdate({ ...requestUpdate, err, isLoading: false }))

    }

    // const { values, errors, submitting, handleSubmit } = signUpForm
    
    useEffect(() => {

    }, [requestUpdate])

    return (
        <section className='signup-wrapper'>
            <CloseButton />
            <form className="signup" method='post' action='post' onSubmit={signUpForm.onSubmit(data => console.log(data))}>
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
                        withAsterisk
                        placeholder="Enter username"
                        label="Username"
                        radius="lg"
                        name='username'
                        {...signUpForm.getInputProps('username')}

                    />
                </CSSTransition>


                <CSSTransition
                    in={showEmailBox}
                    timeout={500}
                    classNames="email-box"
                    unmountOnExit
                >

                    <TextInput
                        withAsterisk    
                        icon={<AiOutlineMail />}
                        label="Email"
                        placeholder="Your email"
                        radius="lg"
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

                    <PasswordBox signUpForm={signUpForm}/>
                </CSSTransition>
                <CSSTransition
                    in={showPasswordBox}
                    timeout={500}
                    classNames="password-box"
                    unmountOnExit
                >
                    {/* <PasswordInput
                        label="Confirm Password"
                        placeholder="Password"
                        radius="lg"
                        size="md"
                        visibilityToggleIcon={({ reveal }) =>
                            reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                        }
                        name='confirmPassword'
                        {...signUpForm.getInputProps("confirmPassword")}
                    /> */}
                    <PasswordInput
                        withAsterisk
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        radius="lg"
                        visibilityToggleIcon={({ reveal }) =>
                            reveal ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />
                        }
                        name='confirmPassword'
                        {...signUpForm.getInputProps("confirmPassword")}
                    />
                    
                </CSSTransition>


                <section className="signup__form-ending">
                    <CSSTransition
                        in={showSignupButton}
                        timeout={500}
                        classNames="signup-button"
                        unmountOnExit
                    >
                        <Button color="green" styles={(theme) => ({
                            root: {
                                width: rem(150),
                                height: rem(38),
                                fontSize: rem(19),
                                alignSelf: 'center',
                            }
                        })}
                            type={'submit'}
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
                            <Link to={'/auth/login'}>Login</Link>
                        </p>
                    </CSSTransition>
                </section>
            </form>
        </section>
    );
}

export default SignUp;
