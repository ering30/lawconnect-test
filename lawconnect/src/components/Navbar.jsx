import React, { useState, useEffect } from 'react'
import AccountButton from './AccountButton';
import '../../src/App.css';
import NavButton from './NavButton';

function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return {
        width
    }
}

export default function Navbar() {
    const { width } = useWindowDimensions()
    return (
        <div class="navbarContainer">
            <div class="toolbar">
                <a href='/'><img class="logoButton" src='assets/logos/LawConnect-logo-reverse-RGB.png' alt='LawConnect Logo'/></a>
                {width > 1013 ? 
                <>
                    <div class="centreNavGroup">
                    <NavButton buttonText="For People"/>
                    <NavButton buttonText="For Businesses"/>
                    <NavButton buttonText="Contact"/>
                    </div>
                    <div class="navMenuDiv">
                        <NavButton buttonText="Login" />
                        <AccountButton buttonText="Create Free Account"/>
                    </div>
                </>
                : <span style={{color: '#ffffff', fontSize:'1.5em' }}>
                    <i class="fa-solid fa-bars"></i>
                    </span> }
            </div>
        </div>
    )
}
