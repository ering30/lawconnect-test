import React from 'react'
import '../../src/App.css';

export default function NavButton(props) {
    const { buttonText, buttonFunction } = props
    return (
        <>
        <button class="navButton" onClick={buttonFunction}>{buttonText}</button>
        </>
    )
}
