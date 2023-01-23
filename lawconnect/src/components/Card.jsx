import React from 'react'
import '../../src/App.css';

export default function Card(props) {
    const { imageSrc, cardTitle, cardText } = props
    return (
        <div class="contentCard">
            <div class="cardMedia">
                <img src={imageSrc} alt={cardTitle} class="cardImage"/>
            </div>
            <h5 class="cardTitle">{cardTitle}</h5>
            <p class="cardText">{cardText}</p>
        </div>
    )
}
