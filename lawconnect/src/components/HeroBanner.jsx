import React from 'react'
import '../../src/App.css';
import AccountButton from './AccountButton';

export default function HeroBanner() {
    return (
        <div class="heroDiv">
            <div class="heroText">
                <div class="contentContainer">
                    <div class="hero-flex-item-1">
                        <h1>The place to work with your lawyer</h1>
                        <h4>
                            Your lawyer uses LawConnect to share information with you about your legal case 
                            in a private, convenient and secure way.
                        </h4>
                        <AccountButton />
                    </div>
                    <div class="hero-flex-item-2" style={{alignItems: "center"}}>
                        <div class="circleDiv">
                            <img 
                                class="heroImage" 
                                src='assets/images/lc-hero-desktop@2x.png' 
                                alt='Graphic showing LawConnect user interface'
                            />
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
