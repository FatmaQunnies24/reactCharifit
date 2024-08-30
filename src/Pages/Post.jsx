import "./Post.css"

function Post(props) {
    return (
      <>
        <div className="media post_item">
          <img src={props.imgUrl} alt="post" />
          <div className="media-body">
            <a href="single-blog.html">
              <h3>{props.name}</h3>
            </a>
            <p>{props.date}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Post;
  