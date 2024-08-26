import React, { useState } from 'react';
import "./ReasonOfHelping.css";
function ReasonOfHelping(props) {
    const [isReadMore, setIsReadMore] = useState(false);
    
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    // const descriptionPreview = props.desc.length > 100 ? `${props.desc.substring(0, 500)}...` : props.desc;

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <div className="single_reson">
                        <div className="thum">
                            <div className="thum_1">
                            <img src={`${process.env.PUBLIC_URL}/images/${props.imgUrl}`} alt={props.name} />
                            </div>
                        </div>
                        <div className="help_content">
                            <h4>{props.name}</h4>
                            <p>{props.desc}
                                {/* {isReadMore ? props.desc : descriptionPreview}
                                {props.desc.length > 500 && (
                                    <span className="read_more" onClick={toggleReadMore}>
                                        {isReadMore ? 'Show Less' : 'Read More'}
                                    </span>
                                )} */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReasonOfHelping;
