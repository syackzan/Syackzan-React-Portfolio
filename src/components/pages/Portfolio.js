import React from 'react';
import onTrack from '../assets/images/onTrack.png';
import techBlog from '../assets/images/techblog.png';

function Portfolio() {
    return (
    <div>
        {/* <section className="header1">
            <h2 className="headerColor">Portfolio</h2>
            <div className="buttonbox">
                <input type="button" value="-" className="btn2"></input>
            </div>
        </section> */}

        <div className="jumbotron aboutMe">
            <section class="header1">
                <h2 className="headerColor"><u>Full Stack Programs</u></h2>
            </section>
            <div className="row d-flex flex-wrap">
                <div className="col-md-6 columnDiv">
                    <div className="order">
                        <a href="https://sheltered-lake-23144.herokuapp.com/"
                            className="navStyle">
                            <section className="mainBorder formatSection bigger">
                                <img className="formatImage" src={onTrack} alt="onTrack Image" />
                                <h2 className="formatHeader">onTrack</h2>
                            </section>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 columnDiv">
                    <div className="order">
                        <a href="https://cryptic-sands-14911.herokuapp.com/"
                            className="navStyle">
                            <section className="mainBorder formatSection bigger">
                                <img className="formatImage" src={techBlog} alt="techBlog Image" />
                                <h2 className="formatHeader">Tech Blog</h2>
                            </section>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    )
}

export default Portfolio;