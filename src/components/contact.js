import React from 'react'
import '../App.css'
import { useState } from 'react';
import email from '../Images/email.png';
import phone from '../Images/phone.png';
import linkedin from '../Images/linkedin.png';

export const Contact = () => {
    const [inputBox, setInputBox] = useState('');
    const [display, setDisplay] = useState('');

    function handleTyping(event) {
        setInputBox(event.target.value)
        console.log(event.target.value)
    }

    function displayParagraph() {
        setDisplay(inputBox)
    }
    return (
        <>
            <div class="page-layout">
                <h1>Contact</h1>
                <p>Different ways to reach me.</p>

                <div class="text">
                    <p> 
                        Feel free to reach out to me through various channels! You can send me a message using the contact form on my website, and I'll get back to you as soon as possible. Additionally, you can connect with me via email or find me on social media platforms such as LinkedIn and Twitter. Whether you have questions, ideas, or just want to chat, I'm always eager to hear from you. Your thoughts and feedback are important to me, and I'm here to help in any way I can. Don't hesitate to reach out—I'm looking forward to our conversation!
                    </p>

                    <div id="submitform">
                        <p>{display}</p>
                        <input value={inputBox} onChange={handleTyping}/>
                        <button onClick={displayParagraph}>submit form</button>
                    </div>
                </div>

            
                <ul class="social-media-list">
                    <li>
                        <img class="contact-images" src={email} alt="email" />
                        <p> haylie.tan.college@gmail.com </p>
                    </li>

                    <li>
                        <img class="contact-images" src={phone} alt="email" />
                        <p> (510)358-1578 </p>
                    </li>

                    <li>
                        <img class="contact-images" src={linkedin} alt="email" />
                        <p> linkedin.com/haylietan27 </p>
                    </li>
                </ul>

            </div>
        </>
    )
}