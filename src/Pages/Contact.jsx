import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import './Contact.css';
import NavPar from './NavPar';
import { useState,useEffect } from 'react';
import Footer from './Footer';

function Contact() {
  const mapContainerStyle = {
    height: "100%",
    width: "100%"
  };

  const center = {
    lat: -31.197,
    lng: 150.744
  };

  const grayStyles = [
    {
      featureType: "all",
      stylers: [
        { saturation: -90 },
        { lightness: 50 }
      ]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        { color: '#ccdee9' }
      ]
    }
  ];

  const mapApiKey = 'AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I'; 

  const [location, setLocation] = useState({"p1":"Buttonwood, California.","p2":"Rosemead, CA 91770"});
  const [phoneNumber, setPhoneNumber] = useState({"number":"+1 253 565 2365","time":"Mon to Fri 9am to 6pm"});
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState({"email":"support@colorlib.com","mass":"Send us your query anytime!"});
  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   console.log("Message:", message);
  //   console.log("Name:", name);
  //   console.log("Address:", address);
  //   console.log("Subject:", subject);
  // };


  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsSubmitted(true); 
  };

  useEffect(() => {
    if (isSubmitted) {
      const sendFormData = async () => {
        try {
          const response = await fetch('https://your-api-endpoint.com/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              message: message,
              name: name,
              address: address,
              subject: subject,
            }),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          console.log('Success:', data);

          // Reset form fields after successful submission
          setMessage('');
          setName('');
          setAddress('');
          setSubject('');
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsSubmitted(false); // Reset submission state
        }
      };

      sendFormData();
    }
  }, []);
  return (
    <>
      <NavPar />
      <LoadScript googleMapsApiKey={mapApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={9}
          options={{
            styles: grayStyles,
            scrollwheel: false
          }}
          className="map-container"
        />
      </LoadScript>

      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <div className="contact-container">
              <div className="contact-form-container">
                <h2 className="contact-title">Get in Touch</h2>
                <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea 
                          className="form-control w-100" 
                          name="message" 
                          id="message" 
                          cols="30" 
                          rows="9" 
                          placeholder="Enter Message"  
                          value={message}  
                          onChange={(e) => {
                            setMessage(e.target.value); 
                            console.log(message);
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="name" id="name" type="text" placeholder="Enter your name"  
                          value={name}  
                          onChange={(e) => {
                            setName(e.target.value); 
                            console.log({name});
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input className="form-control valid" name="email" id="email" type="email" placeholder="Enter email address"   
                          value={address}  
                          onChange={(e) => {
                            setAddress(e.target.value); 
                            console.log({address});
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject"   
                          value={subject}  
                          onChange={(e) => {
                            setSubject(e.target.value); 
                            console.log({subject});
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button type="submit"  className="button button-contactForm boxed-btn"   onClick={handleSubmit}>Send</button>
                  </div>
                </form>
              </div>
              <div className="contact-info-container">
                <div className="media contact-info-new">
                  <span className="contact-info__icon"><i className="fas fa-home"></i></span> 
                  <div className="media-body">
                    <h3>{location.p1}</h3>
                    <p>{location.p2}</p>
                  </div>
                </div>
                <div className="media contact-info-new">
                  <span className="contact-info__icon"><i className="fas fa-phone-alt"></i></span>
                  <div className="media-body">
                    <h3>{phoneNumber.number}</h3>
                    <p>{phoneNumber.time}</p>
                  </div>
                </div>
                <div className="media contact-info-new">
                  <span className="contact-info__icon"><i className="fas fa-envelope"></i></span>
                  <div className="media-body">
                    <h3>{email.email}</h3>
                    <p>{email.mass}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
<Footer></Footer>

    </>
  );
}

export default Contact;
