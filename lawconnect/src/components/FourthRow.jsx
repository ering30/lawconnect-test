import React from 'react'
import '../../src/App.css';

export default function FourthRow() {
    return (
        <div class="white-bg">
            <div class="contentContainer">
                <div class="imageBlock flex-item-1">
                    <img 
                        src='assets/images/lc-sign-docs-desktop@2x.png' 
                        alt='Graphic showing the DocuSign mobile interface' 
                        class="contentImage" 
                    />
                </div>
                <div class="textBlock flex-item-1">
                    <h3>Signing Documents Electronically</h3>
                    <p class="textBlock">
                        LawConnect integrates with DocuSign to provide our users with a quick, easy and secure way
                        to sign important legal documents online. 
                    </p>
                </div>
            </div>
        </div>
    )
}
