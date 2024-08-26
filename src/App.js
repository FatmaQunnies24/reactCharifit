import './App.css';
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logoImage from './logo.png';
import boyImg from './boyImg.webp';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cause from './Pages/Cause';
import Contact from './Pages/Contact';
import Elements from './Pages/Elements';
import SingleBlog from './Pages/SingleBlog';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';





function App() {
  
const [phoneNumber,setPhoneNumber]=useState("+1 (454) 556-5656");
const [email,setEmail]=useState(" Yourmail@gmail.com");
  return (
    
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <div className="contact-info">
          <span><FontAwesomeIcon icon={faPhone} /> {phoneNumber}</span>
          <span><FontAwesomeIcon icon={faEnvelope} />{email}</span> </div>
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
          <nav>
                                    <ul id="navigation">
                                        <li><Link to="/Home">home</Link></li>
                                        <li><Link to="/About">about</Link></li>
                                        <li> blog <FontAwesomeIcon icon={faAngleDown} />
                                            <ul class="submenu">
                                                <li><Link to="/Blog">blog</Link></li>
                                                <li><Link to="/SingleBlog">single-blog</Link></li>
                                            </ul>
                                        </li>
                                        <li>elements<FontAwesomeIcon icon={faAngleDown} />
                                            <ul class="submenu">
                                                <li><Link to="/Elements">elements</Link></li>
                                                <li><Link to="/Cause">Cause</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </nav>
          <button className="donate-button">Make a Donate</button>
        </nav>
       
        <div className="hero-section" style={{ backgroundImage: `url(${boyImg})` }}>
        <h2><br></br> </h2>
        <h2><br></br> </h2>
          <h2>Get Started Today.</h2>
          <h1>Help the children<br></br> When They Need</h1>
          <p>With so much to consume and such little time, coming up <br></br>with relevant title ideas is essential.</p>
         <div  className="donate-button"> <Link to="/About">
        Learn more
      </Link>  </div> <div className='co'>   
        </div></div>
      </header>


<Routes>
      <Route path="/Home" element={<App />} />
                        <Route path="/About" element={<About></About>} />
                        <Route path="/Blog" element={<Blog />} />
                        <Route path="/SingleBlog" element={<SingleBlog />} />
                        <Route path="/Elements" element={<Elements />} />
                        <Route path="/Cause" element={<Cause />} />
                        <Route path="/Contact" element={<Contact/>} />
                      </Routes>
    </div>
  );
}

export default App;