import { useState } from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoImage from '../../src/footer_logo.png';

function Footer() {
  const [info, setInfo] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.");
  const [socialInfo, setSocialInfo] = useState({  
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    pinterest: "https://www.pinterest.com/",
    dribbble: "https://dribbble.com/",
    instagram: "https://www.instagram.com/"
  });

  const [newsList, setNewsList] = useState([
    {
      name: "Pure Water Is More Essential",
      date: "July 18, 2019",
      imgUrl: "/images/news/1.png",
    },
    {
      name: "Pure Water Is More Essential",
      date: "July 18, 2019",
      imgUrl: "/images/news/1.png",
    }
  ]);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="container">
          <div className="footer-row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="#">
                    <img src={logoImage} alt="Logo" />
                  </a>
                </div>
                <p className="address-description">
                  {info}
                </p>
                <div className="social-links">
                  <ul className="social-links-list">
                    <li>
                      <a href={socialInfo.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href={socialInfo.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={socialInfo.dribbble} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href={socialInfo.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={socialInfo.pinterest} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">Services</h4>
                <ul className="service-links-list">
                  <li><Link to="#">How We Work</Link></li>
                  <li><Link to="#">About Us</Link></li>
                  <li><Link to="#">Contact</Link></li>
                  <li><Link to="#">Donate</Link></li>
                  <li><Link to="#">Faq</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="footer-widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="service-links-list">
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                  <li><Link to="#">Career</Link></li>
                  <li><Link to="#">Help</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="footer-widget">
                <h4 className="widget-title">News</h4>
                <ul className="news-items">
                  {newsList.map((news, index) => (
                    <li key={index}>
                      <div className="thumbnail">
                        <img src={news.imgUrl} alt={news.name} />
                      </div>
                      <div className="info">
                        <h4>{news.name}</h4>
                        <span>{news.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-text text-center">
        <p className="copy-right">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
