import React from 'react'
import '../App.css'

export const AboutMe = () => {
    return (
        <>
            <div class="aboutMe">
                <h1>about me</h1>
                <p>all about me</p>
            </div>

            <div class="page">
                <div class="content">

                    <div class="page-column">
                        <p>About me.</p>
                    </div>

                    <div class="page-column">
                        <p>
                            This is an article of content that sits inline with a sidebar. Resize the
                            browser to see how when there’s no enough room, the sidebar will stack on to a
                            new line.
                        </p>
                    </div>
            </div>
        </div>
        </>
    )
}