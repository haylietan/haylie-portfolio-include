import React from 'react'
import '../App.css'

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
                </div>

            <div id="skills">

                <h1 class="heading">
                    Skills
                </h1>

                <img src="Images/headshothaylie.jpg" alt="Haylie Tan"/>
                <img src="../Images/python.png" alt="python"/>
                <img src="../Images/git.png" alt="git"/>
                <img src="../Images/html.png" alt="html"/>
                <img src="../Images/css.png" alt="css"/>
                <img src="../Images/react.png" alt="react"/>

            </div>


        </div>
        
    )
}