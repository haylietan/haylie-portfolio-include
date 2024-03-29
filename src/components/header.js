import React from 'react';
import '../App.css'
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            <div class="navbar-container">
                <nav>
                    <ul>
                        <li><a href='/' target="_blank">Home</a></li>
                        <li><a href='/aboutme' target="_blank">About Me</a></li>
                        <li><a href='/projects' target="_blank">Projects</a></li>
                        <li><a href='/contact' target="_blank">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}