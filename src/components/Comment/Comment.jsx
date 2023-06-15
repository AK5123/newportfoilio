import React from "react";
import "./styles.css";

const Comment = ({ text, className }) => {
    return (
        <div className={`comment-container ${className}`}>
            <p className="comment-text">{text}</p>
        </div>
    );
};

export default Comment;
