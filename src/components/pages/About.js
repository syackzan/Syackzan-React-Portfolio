import React from 'react';
import face from '../assets/images/images1.png'

function About () {
    return (
        <div className='jumbotron center'>
            <div className='row d-flex flex-wrap mainBorder '>
                <div className='col-md-12 flex-fill meContent'>
                    <img className="mainBorder img1" src={face} alt="Scotty's Photo" />
                    <p>
                    Hi, my name is Scotty Yackzan and I am a Programmer
                </p>
                <p>
                    Now, Let's get to the real reasons why you're here. My talents:
                </p>
                <ul className=''>
                    <li>
                        <b>Knowledge: </b>I am well versed in several programmer languages ranging from C++, HTML, CSS,
                        Javascript, Jquery, node.js, mySql, Sequelize, Handlebars, Bcrypt, Moment.js, Bootstrap, node.js, and express.
                    </li>
                    <li>
                        <b>Communication: </b> I pride myself on communication. My phone is my office. Expect a return
                        call or text within 15 minutes if I'm your programmer.
                    </li>
                    <li>
                        <b>Management: </b>People are the secret ingredient. Most people think management is about
                        telling others what to do when in fact a manager's role is simply support for the team.
                    </li>
                    <li>
                        <b>Speed: </b>Less about speed and more about efficiency.
                    </li>
                    <li>
                        <b>Team Player: </b>Ever since I was a little kid, I've always enjoyed playing team sports over
                        solo. It feels better when everyone wins together.
                    </li>
                    <li>
                        <b>Big-Picture Focus: </b>Structure is everything in programming. What do you want? A more
                        difficult question than some clients think, but once that question is solved, the rest falls
                        into place.
                    </li>
                </ul>
                <p>
                    I look forward to working with you! Please check out my portfolio below. Hopefully, what I showcase
                    will help you understand
                    a little more about my skill. Most of what I said above is fluff - unless I can back it up!
                </p>
                </div>
            </div>
        </div>
    )
}

export default About;