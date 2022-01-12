import React from 'react';

const Post = ({post}) => {
    return (
        <div className='block'>
            <div><b>userId:</b> {post.userId}</div>
            <div><b>tittle:</b> {post.title}</div>
            <div><b>body:</b> {post.body}</div>
        </div>
    );
};

export default Post;