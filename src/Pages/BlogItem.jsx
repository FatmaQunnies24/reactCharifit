import { useEffect, useState } from 'react';
import "./BlogItem.css";
import { Link } from 'react-router-dom';

function BlogItem(props) {
    const { blog, index } = props;
        const [commentcount, setCommentcount] = useState(0);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/commentcount/${blog.id}`, {
            headers: {
                // Authorization: "Bearer " + token,
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.comment_count)
            setCommentcount(data.comment_count); 
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <article className="blog_item" key={index}>
            <div className="blog_item_img">
                <img 
                    className="card-img rounded-0" 
                    src={blog.imgUrl || "img/blog/single_blog_1.png"} 
                    alt={blog.name} 
                />
                <a href="#" className="blog_item_date">
                    <h3>{new Date(blog.date).getDate()}</h3>
                    <p>{new Date(blog.date).toLocaleString('default', { month: 'short' })}</p>
                </a>
            </div>

            <div className="blog_details">
            <Link className="d-inline-block"  to={{
    pathname: `/SingleBlog`,
    state: { blog: props.blog }
  }}>
            <h2>{blog.name}</h2>
                </Link>
                <p>{blog.disc}</p>
                <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> {blog.style}</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> {commentcount} Comments</a></li>
                </ul>
            </div>
        </article>
    );
}

export default BlogItem;
