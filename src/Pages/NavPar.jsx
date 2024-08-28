import '../App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../logo.png';

function NavPar(props) {
    const [phoneNumber, setPhoneNumber] = useState("+1 (454) 556-5656");
    const [email, setEmail] = useState(" Yourmail@gmail.com");

    return (
        <header className="App-header">
            <div className="top-bar">
                <div className="contact-info">
                    <span><FontAwesomeIcon icon={faPhone} /> {phoneNumber}</span>
                    <span><FontAwesomeIcon icon={faEnvelope} /> {email}</span>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faPinterest} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                </div>
            </div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logoImage} alt="Logo" />
                </div>
                <ul id="navigation">
                    <li><Link to="/Home">home</Link></li>
                    <li><Link to="/About">about</Link></li>
                    <li> blog <FontAwesomeIcon icon={faAngleDown} />
                        <ul className="submenu">
                            <li><Link to="/Blog">blog</Link></li>
                            <li><Link to="/SingleBlog">single-blog</Link></li>
                        </ul>
                    </li>
                    <li>elements<FontAwesomeIcon icon={faAngleDown} />
                        <ul className="submenu">
                            <li><Link to="/Elements">elements</Link></li>
                            <li><Link to="/Cause">Cause</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
                <button className="donate-button">Make a Donate</button>
            </nav>
            {props.type === 'home' ? (
                <div
                    className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                    style={{ backgroundImage: `url(${props.img})` }}
                >
                    <h2><br /></h2>
                    <h2><br /></h2>
                    <h2>Get Started Today.</h2>
                    <h1>Help the children<br /></h1>
                    <p>With so much to consume and such little time, coming up<br />with relevant title ideas is essential.</p>
                    <Link to="/About" className="donate-button" style={{ marginLeft: 0 }}>
                        Learn more
                    </Link>
                </div>
            ) : props.type === 'about' ? (
                <div className='about'>
                    <div
                        className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                        style={{ backgroundImage: `url(${props.img})` }}
                    >
                        <h2><br /></h2>
                        <h2><br /></h2>
                        <h1 className='abouth1' style={{ textAlign: "center", marginTop: "10%" }}>About Us</h1>
                    </div>
                </div>
            ) : props.type === 'contact' ? (
                <div className='contact'>
                    <div
                        className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                        style={{ backgroundImage: `url(${props.img})` }}
                    >
                        <h2><br /></h2>
                        <h2><br /></h2>
                        <h1 className='contacth1' style={{ textAlign: "center", marginTop: "10%" }}>Contact Us</h1>
                    </div>
                </div>
            ) : props.type === 'cause' ? (
                <div className='contact'>
                    <div
                        className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                        style={{ backgroundImage: `url(${props.img})` }}
                    >
                        <h2><br /></h2>
                        <h2><br /></h2>
                        <h1 className='contacth1' style={{ textAlign: "center", marginTop: "10%" }}>Causes</h1>
                    </div>
                </div>
            ) : props.type === 'Contact' ? (
                <div className='contact'>
                    <div
                        className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                        style={{ backgroundImage: `url(${props.img})` }}
                    >
                        <h2><br /></h2>
                        <h2><br /></h2>
                        <h1 className='contacth1' style={{ textAlign: "center", marginTop: "10%" }}>Causes</h1>
                    </div>
                </div>
            ) :  props.type === 'Blog' ? (
                <div className='contact'>
                    <div
                        className="hero-section d-flex align-items-center slider_bg_1 overlay2"
                        style={{ backgroundImage: `url(${props.img})` }}
                    >
                        <h2><br /></h2>
                        <h2><br /></h2>
                        <h1 className='contacth1' style={{ textAlign: "center", marginTop: "10%" }}>Causes</h1>
                    </div>
                </div>
            ) : null}
        </header>
    );
}

export default NavPar;
