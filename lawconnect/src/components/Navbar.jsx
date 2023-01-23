import React from 'react'
import AccountButton from './AccountButton';
import '../../src/App.css';
import NavButton from './NavButton';

export default function Navbar() {
    return (
        <div class="navbarContainer">
            <div class="toolbar">
                <a href='/'><img class="logoButton" src='assets/logos/LawConnect-logo-reverse-RGB.png' alt='LawConnect Logo'/></a>
                <div class="centreNavGroup">
                    <NavButton buttonText="For People"/>
                    <NavButton buttonText="For Businesses"/>
                    <NavButton buttonText="Contact"/>
                </div>
                <div class="navMenuDiv">
                    <NavButton buttonText="Login" />
                    <AccountButton buttonText="Create Free Account"/>
                </div>
            </div>
        </div>
    )
}
