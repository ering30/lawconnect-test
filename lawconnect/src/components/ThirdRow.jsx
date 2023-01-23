import React from 'react'
import '../../src/App.css';

export default function ThirdRow() {
    return (
        <div class="light-grey-bg">
            <div class="contentContainer">
                <div class="textBlock flex-item-1">
                    <h3>Sharing Documents</h3>
                    <p class="textBlock">
                        Your lawyer will share documents related to your case with you, via LawConnect. Each time a document
                        is shared by your lawyer, you will receive an email notification so you can access the document. 
                    </p>
                    <p class="textBlock">
                        If you already have a LawConnect account, you can login and an alert will be in your notifications
                        tab that a document has been shared. 
                    </p>
                </div>
                    <div class="imageBlock flex-item-1">
                    <img 
                        src='assets/images/lc-share-docs@2x.png' 
                        alt='A woman smiling at the mobile phone she is holding' 
                        class="contentImage" />
                    </div>
            </div>
        </div>
    )
}
