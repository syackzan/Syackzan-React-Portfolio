import React from 'react';

function Header() {
    return (
        <header className="headerStyle">
            <div className="pushHeader">
                <h1 className="textDarker">Scotty Yackzan</h1>
                <p className='text'>Built With React</p>
            </div>
            <div className="pushNav">
            <ul className="nav nav-tabs">
                <li className='nav-item'>
                    <a className='navStyle' href="about" onClick="#">About</a>
                </li>
                <li className='nav-item'>
                    <a className='navStyle' href="portfolio" onClick='#'>Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a className='navStyle' href="resume" onClick='#'>Resume</a>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default Header