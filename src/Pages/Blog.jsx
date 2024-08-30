import { useEffect, useState } from 'react';
import "./Blog.css";
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem'
import RightSideBlog from './RightSideBlog'
import NavPar from './NavPar';
import Footer from './Footer';

function Blog(props) {


    

const [blogList, setBlogList] = useState([{
    "name": "Google inks pact for new 35-storey office",
    "date": "15 Jan", 
    "imgUrl":"/images/blog/single_blog_1.png",
    "NumComment":"3",
    "id":"1",
    "style":" Travel, Lifestyle",
    "Disc":"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
},{
    "name": "Google inks pact for new 35-storey office",
    "date": "15 Jan", 
    "imgUrl":"/images/blog/single_blog_2.png",
    "NumComment":"3",
    "id":"2",
    "style":" Travel, Lifestyle",
    "Disc":"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
},{
    "name": "Google inks pact for new 35-storey office",
    "date": "15 Jan", 
    "imgUrl":"/images/blog/single_blog_3.png",
    "NumComment":"3",
    "id":"3",
    "style":" Travel, Lifestyle",
    "Disc":"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
},{
    "name": "Google inks pact for new 35-storey office",
    "date": "15 Jan", 
    "imgUrl":"/images/blog/single_blog_4.png",
    "NumComment":"3",
    "id":"4",
    "style":" Travel, Lifestyle",
    "Disc":"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
},{
    "name": "Google inks pact for new 35-storey office",
    "date": "15 Jan", 
    "imgUrl":"/images/blog/single_blog_5.png",
    "NumComment":"3",
    "id":"5",
    "style":" Travel, Lifestyle",
    "Disc":"That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying."
},]);

    // const [blogList, setBlogList] = useState(props.blog || []);

    useEffect(() => {
        fetch("", {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            setBlogList(data); 
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (<>
          <NavPar img="/images/bradcam.png"  type="Blog"></NavPar>

        <section className="blog_area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className="blog_left_sidebar">
                            {blogList.map((blog, index) => (
                         <><BlogItem index={index} blog={blog}></BlogItem></>
                            ))}
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

export default Blog;
