import { useEffect, useState } from 'react';
import "./News.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function News() {
    const [newsList, setNewsList] = useState([
        {
            "name": "Pure Water Is More Essential",
            "date": "July 18, 2019",
            "imgUrl": "/images/news/1.png",
            "desc": "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again."
        },
        {
            "name": "Pure Water Is More Essential",
            "date": "July 18, 2019",
            "imgUrl": "/images/news/2.png",
            "desc": "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again."
        },
        {
            "name": "Pure Water Is More Essential",
            "date": "July 18, 2019",
            "imgUrl": "/images/news/1.png",
            "desc": "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again."
        },
        {
            "name": "Pure Water Is More Essential",
            "date": "July 18, 2019",
            "imgUrl": "/images/news/2.png",
            "desc": "The passage experienced a surge in popularity during the 1960s when used it on their sheets, and again."
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
                setNewsList(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="news__area">
        {newsList.map((item, index) => (
            <div key={index} className="single__blog">
                <div className="thum">
                    <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className="newsinfo">
                    <span>{item.date}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                   
                    <Link to="/SingleBlog" className="read_more" style={{ marginLeft: 0 }}>   Read More
                    </Link>

                </div>
            </div>
        ))}
    </div>
);
}

export default News;