import React from 'react'
import '../App.css'

export const AboutMe = () => {
    return (
        <>
            <div class="page-layout">
                <h1>About Me</h1>
                <p>More about me.</p>
                
                <div class='about-parent'>
                    <div class='child' id="child-narrow">Haylie Tan</div>

                    <div class='child' id="child-wide">
                        Hi there! 👋 <br/> 
                        I'm Haylie, a first-year computer science major at UC Davis with a passion for social change. 
                        I'm excited to explore how technology can drive positive impact and tackle societal challenges. <br/>
                        <br/>
                        Beyond coding, you'll often find me immersed in K-dramas or discovering new music.
                        I love unwinding with friends over coffee or exploring the vibrant city of Davis.
                        My ultimate goal is to become a software engineer or web developer, leveraging my skills to create innovative solutions.
                        I can't wait to embrace the opportunities ahead and make a meaningful difference through technology.
                    </div>
                </div>

                <div class='about-parent'>
                    <div class='child' id="child-narrow">Skills</div>

                    <div class='child' id="child-wide">
                    In my recent experiences, I've honed my skills in software development and project management through various roles. At Davis Data Driven Change, I collaborated with a team to design and develop software applications focused on enhancing Women's Safety initiatives, fostering effective communication and collaboration in weekly meetings. <br/><br/> As a Social Media Manager for Girls Who Code, I organized events, created promotional materials, managed participant registration, and ensured smooth event logistics for HerHacks hackathon.  <br/><br/> Additionally, as an intern for Applications of Computer in Technology, I provided technical support, facilitated collaborative learning environments, and offered personalized assistance to students, enhancing their proficiency in software tools like R Studio.  <br/> <br/>Alongside my education at UC Davis, where I've completed coursework in programming languages like Python, utilized R Studio for data analysis, and participated in hackathons like HerHacks and MIT Blueprint, I've also acquired technical skills in R Studio, HTML5, CSS, Python, Java, and proficiency in Microsoft and Google Suite. My involvement in competitions such as Techtogether Chicago's The Most Courageous Hack #1 Award Winner further showcases my dedication to innovation and problem-solving in the tech industry.
                    </div>
                </div>

                <div class='about-parent'>
                    <div class='child' id="child-narrow">Hobbies</div>

                    <div class='child' id="child-wide">
                    During my free time, I thoroughly enjoy spending quality moments with friends, whether it's over a cup of coffee at a cozy café or simply hanging out and catching up. <br/><br/> Additionally, I find great pleasure in experimenting with Figma, exploring its features, and unleashing my creativity through design. I also have a strong penchant for continually expanding my programming language repertoire, finding immense satisfaction in the process of mastering new coding skills. On a lighter note, I have a delightful collection of Jelly Cats and Pop Mart figurines, which I adore for their whimsical charm and ability to bring joy to any space. These hobbies not only entertain me but also serve as a source of inspiration, adding vibrancy and excitement to my life.
                    </div>
                </div>


            </div>
        </>
    )
}