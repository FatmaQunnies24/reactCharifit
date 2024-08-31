import React, { useState } from 'react';
import "./ReasonOfHelping.css";
import { Link } from 'react-router-dom';

function ReasonOfHelping(props) {
    const [isReadMore, setIsReadMore] = useState(false);
    
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    const descriptionPreview = props.desc.length > 100 ? `${props.desc.substring(0, 100)}...` : props.desc;

    return (
        <div className="reson_area">
            <div className="single_reson">
                <div className="thume">
                    <div className="thum_1e">
                        {/* <img src={`/images/${props.imgUrl}`} alt={props.name} /> */}
                        <img src={props.imgUrl} alt={props.name} />

                    </div>
                </div>
                <div className="help_contente">
                    <h4>{props.name}</h4>
                    <p>
                        {isReadMore ? props.desc : descriptionPreview}
                        {props.desc.length > 100 && (
                            <span className="read_more" onClick={toggleReadMore}>
                                {isReadMore ? 'Show Less' : 'Read More'}
                            </span>
                        )}
                    </p>
                    <Link to="/ReadMore">Read More</Link>
                </div>
            </div>
        </div>
    );
}

export default ReasonOfHelping;
