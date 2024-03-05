import React from 'react';
import "../styles/footer.css"

export const Footer = () => {
    return (
        <div class="footer-container">
            <div class="row">
                <div class="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">My Mission</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Organizations</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Contact Me</h4>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Handshake</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Organizations</h4>
                    <ul>
                        <li><a href="#">D3C</a></li>
                        <li><a href="#">#include</a></li>
                        <li><a href="#">Girls Who Code</a></li>
                        <li><a href="#">PLS021</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>follow Me</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}