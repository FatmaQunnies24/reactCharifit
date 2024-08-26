import { useEffect, useState } from 'react';
import "./CausesList.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function CausesList() {
    const [causesList, setCausesList] = useState([{
        "name": "Clothes For Everyone",
        "Raised": "$5000.00", 
        "Goal": "$9000.00",
        "pre":"30%",
        "imgUrl":"/images/causes/5.png",

        "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
        "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
    },
    {
        "name": "Clothes For Everyone",
        "Raised": "$5000.00", 
        "Goal": "$9000.00",
        "pre":"30%",
        "imgUrl":"/images/causes/4.png",

        "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
        "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
    },
    {
        "name": "Clothes For Everyone",
        "Raised": "$5000.00", 
        "Goal": "$9000.00",
        "pre":"30%",
        "imgUrl":"/images/causes/3.png",

        "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
        "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
    },
    {
        "name": "Clothes For Everyone",
        "Raised": "$5000.00", 
        "Goal": "$9000.00",
        "pre":"30%",
        "imgUrl":"/images/causes/2.png",
        "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
        "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
    },
    {
        "name": "Clothes For Everyone",
        "Raised": "$5000.00", 
        "Goal": "$9000.00",
        "pre":"30%",
        "imgUrl":"/images/causes/1.png",
        "smallDisc":"The passage is attributed to an unknown typesetter in the century who is thought",
        "Disc":"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided."
    }]);

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
        <div className="row">
        <div className="col-lg-12">
            <div className="causes_active owl-carousel">
                {causesList.map((cause, index) => (
                    <div className="single_cause" key={index}>
                        <div className="thumb">
                            <img src={cause.imgUrl} alt=""/>
                        </div>
                        <div className="causes_content">
                            <div className="custom_progress_bar">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: cause.pre}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                        <span className="progres_count">
                                            {cause.pre}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="balance d-flex justify-content-between align-items-center">
                                <span>{cause.Raised}</span>
                                <span>{cause.Goal}</span>
                            </div>
                            <h4>{cause.name}</h4>
                            <p>{cause.smallDisc}</p>
                            <Link to="/read_more_causes" className="read_more" style={{ marginLeft: 0 }}>
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default CausesList;