import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as CommentReducers from "./commentReducer";
import * as CommentActions from "../component/comment.actions";
import loadingGif from "../assets/loading.gif";
import "./Comment.css";

let Comment = () => {

    let commentData = useSelector((state) => {
        return state[CommentReducers.CommentFeatureKey]
    });

    let dispatch = useDispatch();

    let fetchData = () => {
        alert('fetchData');
        dispatch(CommentActions.fetchComments());
    };

    // destructor
    let { loading, comments, error } = commentData;

    return (
        <Fragment>
           
           <div className="comment-container">
                <h2 className="text-center">Comments Section</h2>
                <button className="btn btn-primary fetch-btn" onClick={fetchData}>
                    Fetch Comments
                </button>
                {loading && (
                    <div className="loading-container">
                        <img src={loadingGif} alt="Loading..." className="loading-gif" />
                    </div>
                )}
                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}
                <div className="comments-display">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment-card">
                            
                            <p><span className="text-success bg-dark">S.No.</span>&nbsp;&nbsp;{index+1}</p>
                            <h5><span className="bg-danger text-white">Name: </span>{comment.name}</h5>
                            <p><span className="text-warning bg-primary"> Body:</span>{comment.body}</p>
                            <small>Email: {comment.email}</small>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default Comment;