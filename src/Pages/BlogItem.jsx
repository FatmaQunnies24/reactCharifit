import { useEffect, useState } from 'react';
import "./BlogItem.css";
import { Link } from 'react-router-dom';

function BlogItem(props) {
    const { blog, index } = props;
    
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
                <Link className="d-inline-block" to={`/blog/${blog.id}`}>
                    <h2>{blog.name}</h2>
                </Link>
                <p>{blog.Disc}</p>
                <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> {blog.style}</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> {blog.NumComment} Comments</a></li>
                </ul>
            </div>
        </article>
    );
}

export default BlogItem;
