import React from 'react'
import Card from './Card'
import '../../src/App.css';

export default function CardRow() {
    return (
        <div class="content-row-1">
            <h2>One Solution Designed to Make Your Firm More Money</h2>
            <div class="cardContainer">
                <Card 
                    imageSrc="/assets/images/lc-safe-docs.jpg"
                    cardTitle="Safe Documents"
                    cardText="LawConnect stores its data on servers provided by Amazon Web Services and is safer than email."
                />
                <Card 
                    imageSrc="/assets/images/lc-work-remote.jpg"
                    cardTitle="Work Remotely"
                    cardText="You can sign into LawConnect and view, collaborate and share your documents from anywhere."
                />
                <Card 
                    imageSrc="/assets/images/lc-greater-collab.jpg"
                    cardTitle="Greater Collaboration"
                    cardText="Collaborate on documents with clients, lawyers, and other parties with LawConnect's Comment and Reply."
                />
            </div>
        </div>
    )
}
