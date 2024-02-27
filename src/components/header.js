import React from 'react';
import '../App.css'
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            <div class="navbar-container">
                <nav>
                    <ul>
                        <li path='/'>Home</li>
                        <li path='/aboutme'>About Me</li>
                        <li path='/projects'>Projects</li>
                        <li path='/contact'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}