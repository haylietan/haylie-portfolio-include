import React from 'react'
import '../App.css'

import headshothaylie from '../Images/headshothaylie.jpg';
import python from '../Images/python.png';
import git from '../Images/git.png';
import html from '../Images/html.png';
import css from '../Images/css.png';
import react from '../Images/react.png';

export const Home = () => {
    return (
        <div class="Home">
            
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

            <div id="intro-text">
                <h1 id="title" class="typing-animation">
                    hi there, i'm haylie tan.
                </h1>

                <div class="text" classs="typing-animation-2">
                    <p>
                        Mathematics and Scientific Computation @ UC Davis
                    </p>

                    <p> 
                        A current first-year student at UC Davis majoring in mathematics and scientific computation. 
                        Eager to bridge the gap between theory and practice, I'm exploring how mathematical rigor aligns
                        with the creativity and innovation of the tech world. Beyond my academic pursuits, 
                        I am always looking to apply my skills, knowledge, and passion towards new and exciting projects.
                    </p>
                </div>

                <img src={headshothaylie} alt="Haylie Tan" />

                </div>

            <div id="skills">

                <h1 className="heading">Skills</h1>

                <img class="skill-images" src={python} alt="python" />
                <img class="skill-images" src={git} alt="git" />
                <img class="skill-images" src={html} alt="html" />
                <img class="skill-images" src={css} alt="css" />
                <img class="skill-images" src={react} alt="react" />

            </div>


        </div>
        
    )
}