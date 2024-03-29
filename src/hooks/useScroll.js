import { useEffect, useState } from "react";
import React from 'react';

const UseScroll = () => {
    //to track the scroll position
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        function handleScroll(){
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return { scrollPosition }
}

export default UseScroll;
