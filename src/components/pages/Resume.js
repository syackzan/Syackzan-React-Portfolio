import React from 'react';
import resumeimg from '../assets/images/resume.png'
import resumepdf from '../assets/pdf/resume.pdf'
import { Link } from 'react-router-dom'

function Resume() {
    return (
        <div className='jumbotron center'>
            <div className='row d-flex mainBorder fitResume'>
                    <h1 className="resumeHeader textDarker">Resume</h1>
                    <a href={resumeimg}>Download Resume Here</a>
                    <img src={resumeimg} alt="resume" />   
            </div>
        </div>
    )
}

export default Resume;