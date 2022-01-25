import React from 'react';

import css from './UserPost.module.css';

const UserPost = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div className={css.text}>
            <div><b>Id:</b> {post.id}</div>
            <div><b>userId:</b> {post.userId}</div>
            <div><b>Title:</b> {post.title}</div>
            <div><b>Body:</b> {post.body}</div>
        </div>
    );
};

export default UserPost;