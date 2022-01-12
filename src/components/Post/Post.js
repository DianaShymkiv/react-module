import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div>userId: {post.userId}</div>
            <div>tittle: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export default Post;