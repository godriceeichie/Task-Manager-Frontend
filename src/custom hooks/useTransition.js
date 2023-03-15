import { useEffect, useState } from 'react'

const useTransition = () => {
    const [showSignupHeading, setshowSignupHeading] = useState(false);
    const [showUsernameBox, setShowUsernameBox] = useState(false);
    const [showEmailBox, setShowEmailBox] = useState(false);
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showSignupButton, setShowSignupButton] = useState(false);
    const [showSignedUp, setShowSignedUp] = useState(false);

    useEffect(() => {
        
        setTimeout(() => {
            setshowSignupHeading(true);
        }, 1000);
        setTimeout(() => {
            setShowUsernameBox(true);
        }, 1500);
        setTimeout(() => {
            setShowEmailBox(true);
        }, 2000);

        setTimeout(() => {
            setShowPasswordBox(true);
        }, 2500);

        // Set a timer to show the sign-up button after 1.5 seconds
        setTimeout(() => {
            setShowSignupButton(true);
        }, 3000);

        setTimeout(() => {
            setShowSignedUp(true);
        }, 3500);
    }, []);
    return { showUsernameBox, showEmailBox, showPasswordBox, showSignupButton, showSignedUp, showSignupHeading }
}

export default useTransition