import { useEffect, useState } from 'react';
import "./Volunteer.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Volunteer() {
    const [volunteerList, setVolunteerList] = useState([
        {
            "name": "Emran Ahmed",
            "info": "Volunteer",
            "imgUrl": "/images/volenteer/1.png",
            "facebook": "https://www.facebook.com/",
            "pinterest": "https://www.pinterest.com/",
            "linkedin": "https://www.linkedin.com/",
            "twitter": "https://x.com/"
        },
        {
            "name": "Sakil khan",
            "info": "Donner",
            "imgUrl": "/images/volenteer/2.png",
            "facebook": "https://www.facebook.com/",
            "pinterest": "https://www.pinterest.com/",
            "linkedin": "https://www.linkedin.com/",
            "twitter": "https://x.com/"
        },
        {
            "name": "Sabbir Ahmed",
            "info": "Volunteer",
            "imgUrl": "/images/volenteer/3.png",
            "facebook": "https://www.facebook.com/",
            "pinterest": "https://www.pinterest.com/",
            "linkedin": "https://www.linkedin.com/",
            "twitter": "https://x.com/"
        }
    ]);

    useEffect(() => {
        fetch("", {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setVolunteerList(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="our_volunteer_area">
            <div className="row">
                {volunteerList.map((cause, index) => (
                    <div className="single_volunteer" key={index}>
                        <div className="volunteer_thumb">
                            <img src={cause.imgUrl} alt="Volunteer" />
                        </div>
                        <div className="volunteer_info">
                            <div className="social_links">
                                <ul>
                                    <li><a href={cause.facebook}><i className="fab fa-facebook"></i></a></li>
                                    <li><a href={cause.pinterest}><i className="fab fa-pinterest"></i></a></li>
                                    <li><a href={cause.linkedin}><i className="fab fa-linkedin"></i></a></li>
                                    <li><a href={cause.twitter}><i className="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                            <h4>{cause.name}</h4>
                            <p>{cause.info}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Volunteer;
