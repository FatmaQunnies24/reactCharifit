import { useEffect, useState } from 'react';
import "./Activities.css";

function Activities() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activities, setActivities] = useState({
        "name": "Activities1",
        "videoUrl": "https://www.youtube.com/embed/MG3jGHnBVQs", 
        "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. enim minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore magna aliqua. enim minim veniam, quis nostrud exercitation. tempor incididunt ut labore dolore magna aliqua. enim minim veniam, quis nostrud exercitation."
    });

    useEffect(() => {
        fetch("", {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setActivities(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
 const isPlayhandle= () => {
    setIsPlaying(true);
  };
  const handleCloseModal = () => {
    setIsPlaying(false);
  };

    return (
        <>
            <div className="latest_activites_area">
                <div className="video_bg_1 video_activite d-flex align-items-center justify-content-center">
                <img src="/images/man.png" className="popup-video" alt="Descriptive text"></img>
                <button onClick={isPlayhandle} className="green-button">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" fill="white"/>
        </svg>
      </button>


      {isPlaying && (
        <div className="modal">
          <div className="modal-content">
            <span onClick={handleCloseModal} className="close-button">&times;</span>
            <p> <iframe 
    className="popup-video"  
    width="560" 
    height="315" 
    src={activities.videoUrl} 
    frameBorder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen
    style={{
        backgroundImage: "url('../../public/images/man.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }}>
    <i className="flaticon-ui"></i>
</iframe></p>
          </div>
        </div>
      )}
               


                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-7">
                            <div className="activites_info">
                                <div className="section_title">
                                    <h3>
                                        <span>Watch Our Latest</span><br />
                                        Activities
                                    </h3>
                                </div>
                                <p className="para_1">{activities.desc}</p>
                                <button className='but'> <a href="#" data-scroll-nav="1" className="boxed-btn4">Donate Now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Activities;