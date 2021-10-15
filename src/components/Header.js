import React from 'react';

function Header({ currentPage, handlePageChange}) {
    return (
        <header className="headerStyle">
            <div className="pushHeader">
                <h1 className="textDarker">Scotty Yackzan</h1>
                <p className='text'>Built With React</p>
            </div>
            <div className="pushNav">
            <ul className="nav nav-tabs">
                <li className='nav-item'>
                    <a className={currentPage === 'About' ? 'navStyle active' : 'navStyle'} href="#about" onClick={() => handlePageChange('About')}>About</a>
                </li>
                <li className='nav-item'>
                    <a className={currentPage === 'Portfolio' ? 'navStyle active' : 'navStyle'} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
                </li>
                <li className='nav-item'>
                    <a className={currentPage === 'Resume' ? 'navStyle active' : 'navStyle'} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
                </li>
                <li className='nav-item'>
                    <a className={currentPage === 'Contact' ? 'navStyle active' : 'navStyle'} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
                </li>
            </ul>
            </div>
        </header>
    )
}

export default Header