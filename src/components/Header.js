import React from 'react';

function Header({ currentPage, handlePageChange}) {
    return (
        <header className="headerStyle">
            <div className="full centerElement onHover">
                <p className="headerTextStyle">SCOTT YACKZAN PORTFOLIO</p>
            </div>
            <div className="d-flex full">
                <div className="divLinksA full">
                    <a className="divLinksB full" href="#about" onClick={() => handlePageChange('About')}>
                        <p className={currentPage === 'About' ? 'navStyle' : 'navStyle'}>ABOUT</p>
                    </a>
                    <a className="divLinksB full" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>
                        <p className={currentPage === 'Portfolio' ? 'navStyle' : 'navStyle'}>PORTFOLIO</p>
                    </a>
                    <a className="divLinksB full" href="#resume" onClick={() => handlePageChange('Resume')}>
                        <p className={currentPage === 'Resume' ? 'navStyle' : 'navStyle'}>RESUME</p>
                    </a>
                    <a className="divLinksB full" href="#contact" onClick={() => handlePageChange('Contact')}>
                        <p className={currentPage === 'Contact' ? 'navStyle' : 'navStyle'}>CONTACT</p>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header