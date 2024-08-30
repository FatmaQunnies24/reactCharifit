import { useEffect, useState } from 'react';
import "./CausesList.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function CausesList(props) {
    const [causesList, setCausesList] = useState(props.list );

    useEffect(() => {
        fetch("", {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setCausesList(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        
                    <div className="single_cause" key={props.index}>
                        <div className="thumb">
                            <img src={props.cause.imgUrl} alt=""/>
                        </div>
                        <div className="causes_content">
                            <div className="custom_progress_bar">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: props.cause.pre}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                        <span className="progres_count">
                                             {props.cause.pre}
                                        </span>
                                    </div> 
                                </div>
                            </div>
                            <div className="balance d-flex justify-content-between align-items-center">
                                <span>{props.cause.Raised}</span>
                                <span>{props.cause.Goal}</span>
                            </div>
                            <h4>{props.cause.name}</h4>
                            <p>{props.cause.smallDisc}</p>
                            <Link to="/read_more_causes" className="read_more" style={{ marginLeft: 0 }}>
                                Read More
                            </Link>
                        </div>
                    </div>
             
);
}

export default CausesList;