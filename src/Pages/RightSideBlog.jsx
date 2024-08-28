import React, { useState, useEffect } from 'react';
import "./RightSideBlog.css";
import Post from './Post';


function RightSideBlog() {
    const [postt, setPost] = useState([
        { "name": "From life was you fish...", "date": "January 12, 2019", "imgUrl": "/images/post/post_1.png" },
        { "name": "The Amazing Hubble", "date": "02 Hours ago", "imgUrl": "/images/post/post_2.png" },
        { "name": "Astronomy Or Astrology", "date": "03 Hours ago", "imgUrl": "/images/post/post_3.png" },
        { "name": "Asteroids telescope", "date": "01 Hours ago", "imgUrl": "/images/post/post_4.png" }
    ]);

    const [subscribe, setSubscribe] = useState('');
    const [search, setSearch] = useState('');
    const [ss,setSs]=useState(false);
    const [dd,setDd]=useState(false);

    useEffect(() => {
        if (search) {
            const fetchData = async () => {
                try {
                    const response = await fetch('', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ search }),
                    });
                    const data = await response.json();
                    console.log('Response Data:', data);
                } catch (error) {
                    console.log('Error:', error);
                }
            };

            fetchData();
        }
    }, [ss]);


    useEffect(() => {
        if (subscribe) {
            const fetchData = async () => {
                try {
                    const response = await fetch('', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ subscribe }),
                    });
                    const data = await response.json();
                    console.log('Response Data:', data);
                } catch (error) {
                    console.log('Error:', error);
                }
            };

            fetchData();
        }
    }, [dd]);
    const handleSearch = () => {
        setSearch(search); 
        setSs(!ss);
    };

    const handleSubscribe = () => {
        setSubscribe(subscribe); 
        setDd(!dd);
    };

    return (
        <div className="col-lg-4">
            <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Keyword"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onFocus={(e) => e.target.placeholder = ''}
                                onBlur={(e) => e.target.placeholder = 'Search Keyword'}
                            />
                        </div>
                    </div>
                    <button className="buttond rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit" onClick={handleSearch}>
                        Search
                    </button>
                </aside>

                {/* The rest of your code remains the same */}
                <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title">Category</h4>
                    <ul className="list cat-list">
                        <li>
                            <a href="#" className="d-flex">
                                <p>Restaurant food</p>
                                <p>(37)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex">
                                <p>Travel news</p>
                                <p>(10)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex">
                                <p>Modern technology</p>
                                <p>(03)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex">
                                <p>Product</p>
                                <p>(11)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex">
                                <p>Inspiration</p>
                                <p>(21)</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="d-flex">
                                <p>Health Care</p>
                                <p>(09)</p>
                            </a>
                        </li>
                    </ul>
                </aside>

                <aside className="single_sidebar_widget popular_post_widget">
                    <h3 className="widget_title">Recent Post</h3>
                    {postt.map((p, index) => (
                        <div className="mediay post_item" key={index}>
                            <div className="media-bodyy">
                                <Post name={p.name} date={p.date} imgUrl={p.imgUrl} />
                            </div>
                        </div>
                    ))}
                </aside>

                <aside className="single_sidebar_widget tag_cloud_widget">
                    <h4 className="widget_title">Tag Clouds</h4>
                    <ul className="list">
                        {['project', 'love', 'technology', 'travel', 'restaurant', 'life style', 'design', 'illustration'].map((tag, index) => (
                            <li key={index}>
                                <a href="#">{tag}</a>
                            </li>
                        ))}
                    </ul>
                </aside>

                <aside className="single_sidebar_widgett instagram_feedss">
                    <h4 className="widget_titlee">Instagram Feeds</h4>
                    <ul className="instagram_roww flex-wrapp">
                        {[5, 6, 7, 8, 9, 10].map((num, index) => (
                            <li key={index}>
                                <a href="#">
                                    <img className="img-fluidd" src={`images/post/post_${num}.png`} alt="post" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title">Newsletter</h4>
                    <div className="form-group">
                        <input
                            type="email"
                         
                            className="form-control"
                           
                            value={subscribe}
                            onChange={(e) => setSubscribe(e.target.value)}
                            onFocus={(e) => e.target.placeholder = ''}
                            onBlur={(e) => e.target.placeholder = 'Search Keyword'}
                        
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <button className="buttond rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit"onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </aside>
            </div>
        </div>
    );
}

export default RightSideBlog;
