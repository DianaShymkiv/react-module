import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>userId: {comment.userId}</div>
            <div>name: {comment.name}</div>
            <div>email: {comment.email}</div>
            <div>body: {comment.body}</div>
        </div>
    );
};

export default Comment;