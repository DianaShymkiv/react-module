import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from './SinglePostPage.module.css';

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }
        postService.getById(id).then(value => setPost({...value}));
    }, [id]);

    return (
        <div>
            {/*<Link to={'/'}><button>Home</button></Link>*/}
            {/*<Link to={'/posts'}><button>Back</button></Link>*/}
            {post && (
                <div className={css.text}>
                    <div><b>Id:</b> {post.id}</div>
                    <div><b>userId:</b> {post.userId}</div>
                    <div><b>Title:</b> {post.title}</div>
                    <div><b>Body:</b> {post.body}</div>
                </div>
            )}
            <Link to={'comments'}>
                <button className={css.button}>Comments</button>
            </Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SinglePostPage};