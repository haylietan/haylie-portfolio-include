import React from 'react';
import '../App.css';
import { useState } from 'react';

// import images
import headshothaylie from '../Images/headshothaylie.jpg';
import python from '../Images/python.png';
import git from '../Images/git.png';
import html from '../Images/html.png';
import css from '../Images/css.png';
import react from '../Images/react.png';

export const Home = () => {
    const [clicked, setClicked] = useState(0);

    function handleClick() {
        setClicked(clicked + 1)
    }

    return (
        <div class="Home">

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

            <div id="click-count">
                <p> This is the number of times clicked: {clicked}.</p>
                <button onClick={handleClick}>click me!</button>
            </div>

            <div id="skills">

                <h1 className="heading">Skills</h1>

                <p class="skills-text">
                    As a passionate and dedicated developer, I have acquired a diverse set of technical skills that enable me to tackle complex challenges and deliver innovative solutions. Here are some of the key skills I bring to the table:
                </p>

                <ul class="skills-text">
                    <li>
                        Frontend Development: Proficient in HTML and CSS with experience in building responsive and user-friendly web interfaces.
                    </li>
                    <li>
                        JavaScript Frameworks: Skilled in using modern JavaScript frameworks such as React.js to develop dynamic and interactive web applications.
                    </li>
                    <li>
                        Version Control: Experienced in using Git for version control, GitHub for collaboration, and GitLab for continuous integration and deployment.
                    </li>
                    <li>
                    RStudio Proficiency: Skilled in utilizing RStudio as the primary integrated development environment (IDE) for R programming.
                    </li>
                    <li>
                        UI/UX Design: Understanding of UI/UX principles, with the ability to design intuitive user interfaces and improve user experience on Figma through wireframing and prototyping.
                    </li>
                </ul>

                <p class="skills-text">
                    My passion for technology and continuous learning drives me to stay updated with the latest trends and tools in the industry, ensuring that I deliver high-quality solutions that meet the evolving needs of users and businesses.
                </p>

                <img class="skill-images" src={python} alt="python" />
                <img class="skill-images" src={git} alt="git" />
                <img class="skill-images" src={html} alt="html" />
                <img class="skill-images" src={css} alt="css" />
                <img class="skill-images" src={react} alt="react" />

            </div>


        </div>
        
    )
}