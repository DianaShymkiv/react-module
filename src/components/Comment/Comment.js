import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className='block'>
            <div><b>postId:</b> {comment.postId}</div>
            <div><b>name:</b> {comment.name}</div>
            <div><b>email:</b> {comment.email}</div>
            <div><b>body:</b> {comment.body}</div>
        </div>
    );
};

export default Comment;