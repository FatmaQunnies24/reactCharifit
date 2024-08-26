import './App.css';
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faPinterest, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import logoImage from './logo.png';
import "./ReasonOfHelping.css";

import About from './Pages/About';
import Blog from './Pages/Blog';
import Cause from './Pages/Cause';
import Contact from './Pages/Contact';
import Elements from './Pages/Elements';
import SingleBlog from './Pages/SingleBlog';

import ReasonOfHelping from './ReasonOfHelping';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';





function App() {
  
const [phoneNumber,setPhoneNumber]=useState("+1 (454) 556-5656");
const [email,setEmail]=useState(" Yourmail@gmail.com");
const [reasonOfHelping,setReasonOfHelping]=useState([{"id":1,"name":"Collecting Fund","imgUrl":"1.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."},
  {"id":2,"name":"Blood Camp","imgUrl":"2.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."},
  {"id":3,"name":"Friendly Volunteer","imgUrl":"3.png","desc":"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print."}]);




useEffect(() => {
  fetch("", {
      headers: {
          // Authorization: "Bearer " + token,
      },
  })
      .then((response) => response.json())
      .then((data) => {
        setReasonOfHelping(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
}, []);

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
       
        <div className="hero-section  d-flex align-items-center slider_bg_1 overlay2" >
        <h2><br></br> </h2>
        <h2><br></br> </h2>
          <h2>Get Started Today.</h2>
          <h1>Help the children<br></br> When They Need</h1>
          <p>With so much to consume and such little time, coming up <br></br>with relevant title ideas is essential.</p>
         <Link to="/About"className="donate-button"  style={{ marginLeft: 0 }}>
        Learn more
      </Link></div>
      </header>




      <div class="reson_area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section_title text-center mb-55">
                        <h3><span>Reason of Helping</span></h3>
                    </div>
                    </div>
                    </div> 

                    <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                    <div className="thum">
                    {reasonOfHelping.map(reason => (
                        <ReasonOfHelping
                            key={reason.id}
                            imgUrl={reason.imgUrl}
                            name={reason.name}
                            desc={reason.desc}
                        />
                    ))}
                    
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    









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