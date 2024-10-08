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
        fetch("http://127.0.0.1:8000/api/news", {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.News);
                setNewsList(data.News);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="news__areaa">
        {newsList.map((item, index) => (
            <div key={index} className="single__bloga">
                <div className="thuma">
                    <img src={item.imgUrl} alt={item.name} />
                </div>
                <div className="newsinfoa">
                    <span>{item.date}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                   
                    <Link to="/SingleBlog" className="read_morea" style={{ marginLeft: 0 }}>   Read More
                    </Link>

                </div>
            </div>
        ))}
    </div>
);
}

export default News;