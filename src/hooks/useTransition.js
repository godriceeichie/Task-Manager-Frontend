import { useEffect, useState } from 'react'

const useTransition = () => {
    const [showSignupHeading, setshowSignupHeading] = useState(false);
    const [showUsernameBox, setShowUsernameBox] = useState(false);
    const [showEmailBox, setShowEmailBox] = useState(false);    
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showForgottenPassword, setShowForgottenPassword] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(false);
    const [showSignedUp, setShowSignedUp] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
            setshowSignupHeading(true);
        }, 500);
        setTimeout(() => {
            setShowUsernameBox(true);
        }, 600);
        setTimeout(() => {
            setShowEmailBox(true);
        }, 700);

        setTimeout(() => {
            setShowPasswordBox(true);
            setShowForgottenPassword(true)
        }, 800);

        setTimeout(() => {
            setShowSignupButton(true);
        }, 900);

        setTimeout(() => {
            setShowSignedUp(true);
        }, 1000);
    }, []);
    return { showUsernameBox, showEmailBox, showPasswordBox, showForgottenPassword, showSignupButton, showSignedUp, showSignupHeading }
}

export default useTransition