import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "./PostPage.module.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, []);

    return (
        <div className={css.flex}>
            <div>
                <h1>Posts</h1>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};