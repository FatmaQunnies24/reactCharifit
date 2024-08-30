import { useEffect, useState } from 'react';
import "./SingleBlog.css";
import { Link } from 'react-router-dom';
import NavPar from './NavPar';
import Footer from './Footer';
import BlogItem from './BlogItem';
import RightSideBlog from './RightSideBlog';
import Post from './Post';
import Comment from './Comment';

function SingleBlog (props) {
    const [id, setid] = useState(props.is || 1);
    const arr = ["pre", "next"];
    const [postt, setPost] = useState([
        { "name": "From life was you fish...", "date": "January 12, 2019", "imgUrl": "/images/post/post_1.png" },
        { "name": "The Amazing Hubble", "date": "02 Hours ago", "imgUrl": "/images/post/post_2.png" }
    ]);
    const [blogList, setBlogList] = useState({
        "name": "Google inks pact for new 35-storey office",
        "date": "15 Jan",
        "imgUrl": "/images/blog/single_blog_1.png",
        "NumComment": "3",
        "id": "1",
        "style": "Travel, Lifestyle",
        "Disc": "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
    });
    const [para, setPara] = useState([
        "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower",
        "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually",
        "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training.",
        "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower",
        "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction of the camp price. However, who has the willpower to actually sit through a self-imposed MCSE training. who has the willpower to actually"
    ]);
    const [comment, setComment] = useState([
        { "id": "1", "name": "Emilly Blunt", "date": "December 4, 2017 at 3:12 pm", "disc": "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser", "imgUrl": "images/comment/comment_1.png" },
        { "id": "2", "name": "divided from", "date": "December 4, 2017 at 3:12 pm", "disc": "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser", "imgUrl": "images/comment/comment_2.png" },
        { "id": "3", "name": "Emilly Blunt", "date": "December 4, 2017 at 3:12 pm", "disc": "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser", "imgUrl": "images/comment/comment_3.png" },
        { "id": "4", "name": "Emilly Blunt", "date": "December 4, 2017 at 3:12 pm", "disc": "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser", "imgUrl": "images/comment/comment_1.png" },
        { "id": "5", "name": "Emilly Blunt", "date": "December 4, 2017 at 3:12 pm", "disc": "Multiply sea night grass fourth day sea lesser rule open subdue female fill which them Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser", "imgUrl": "images/comment/comment_2.png" }
    ]);



    const [newComment, setNewComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    useEffect(() => {
        if (isSubmitted) {
          const submitData = async () => {
            try {
              const response = await fetch('', { 
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ newComment, name, email, website })
              });
    
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
    
              const result = await response.json();
              console.log('Success:', result);
            } catch (error) {
              console.error('Error:', error);
            } finally {
              setIsSubmitted(false); 
            }
          };
    
          submitData();
        }
      }, [isSubmitted]);

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); 
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('', {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                const data = await response.json();
                setPost(data);
                console.log('Response Data:', data);
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <NavPar img="/images/bradcam.png" type="SingleBlog"></NavPar>

            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                <BlogItem index={1} blog={blogList}></BlogItem>
                            </div>

                            <section className="blog_area single-post-area section-padding">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8 posts-list">
                                            <p className="excert">{para[0]}</p>
                                            <p>{para[1]}</p>
                                            <div className="quote-wrapper">
                                                <div className="quotes">
                                                    {para[2]}
                                                </div>
                                            </div>
                                            <p>{para[3]}</p>
                                            <p>{para[4]}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <aside className="single_sidebar_widgety popular_post_widgety">
                                {postt.map((p, index) => (
                                    <div className="mediayy post_itemy" key={index}>
                                        <div className="media-bodyyy">
                                            <Post id={id} name={p.name} date={arr[index]} imgUrl={p.imgUrl} disc={p.dise} />
                                        </div>
                                    </div>
                                ))}
                            </aside>

                            <div className="comments-area">
                                <h4>05 Comments</h4>
                                <div className="comment-list">
                                    {comment.map((p, index) => (
                                        <Comment key={index} name={p.name} date={p.date} imgUrl={p.imgUrl} disc={p.disc}></Comment>
                                    ))}
                                </div>
                            </div>














                            <div className="comment-form">
      <h4>Leave a Reply</h4>
      <form className="form-contact comment_form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control w-100"
                name="comment"
                cols="30"
                rows="9"
                placeholder="Write Comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <input
                className="form-control"
                name="website"
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="buttonn button-contactForm btn_1 boxed-btn">
            Send Message
          </button>
        </div>
      </form>
    </div>
                            
                        </div>

                        <RightSideBlog></RightSideBlog>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}

export default SingleBlog;
