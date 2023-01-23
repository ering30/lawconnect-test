import React, { useState, useEffect } from 'react'
import '../../src/App.css';
import AccountButton from './AccountButton';

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

export default function HeroBanner() {
    const { width } = useWindowDimensions()
    return (
        <div class="heroDiv">
                <div class="heroContentContainer">
                    <div class="hero-flex-item-1">
                        <h1>The place to work with your lawyer</h1>
                        <p class="heroText">
                            Your lawyer uses LawConnect to share information with you about your legal case 
                            in a private, convenient and secure way.
                        </p>
                        <AccountButton />
                    </div>
                    <div class="hero-flex-item-2" style={{alignItems: "center"}}>
                        {width > 1013 ? 
                            <div class="circleDiv">
                                <img 
                                    class="heroImage" 
                                    src='assets/images/lc-hero-desktop@2x.png' 
                                    alt='Graphic showing LawConnect user interface'
                                />
                            </div>
                            : <img 
                                class="heroImage-mobile" 
                                src='assets/images/lc-hero-mobile@2x.png' 
                                alt='Graphic showing LawConnect user interface'
                                />
                        }
                        
                    </div>
                </div>
        </div>
    )
}
