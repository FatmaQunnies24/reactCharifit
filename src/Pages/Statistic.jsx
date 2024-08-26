import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faHeart, faHandsHelping, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import "./Statistic.css";

function Statistic(props) {
    const [finishedEvent1, setFinishedEvent1] = useState(120);
    const [finishedEvent2, setFinishedEvent2] = useState(120);
    const [finishedEvent3, setFinishedEvent3] = useState(120);
    const [finishedEvent4, setFinishedEvent4] = useState(120);

    return (
        <>
            <div className="counter_area">
                <div className="container">
                    <div className="counter_bg overlay">
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faCalendar} size="2x" />
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">{finishedEvent1}</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHeart} size="2x" />
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">{finishedEvent2}</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHandsHelping} size="2x" />
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">{finishedEvent3}</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">{finishedEvent4}</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Statistic;
