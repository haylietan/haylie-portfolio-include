import React from 'react';
import '../App.css'
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            <div class="navbar-container">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Clients</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}