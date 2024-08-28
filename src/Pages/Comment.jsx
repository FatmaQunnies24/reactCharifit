import "./Comment.css";

function Comment(props) {
    return (
        <div className="single-commentr justify-content-between d-flex">
            <div className="userr justify-content-between d-flex">
                <div className="thumbr">
                    <img src={props.imgUrl} alt="User" />
                </div>
                <div className="descr">
                    <p className="commentr">
                        {props.disc}
                    </p>
                    <div className="d-flexr justify-content-between">
                        <div className="d-flexr align-items-centerr">
                            <h5>
                                <a href="#">{props.name}</a>
                            </h5>
                            <p className="dater"> {props.date}</p>
                        </div>
                        <div className="reply-btnr">
                            <a href="#" className="btn-replyr text-uppercase">reply</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
