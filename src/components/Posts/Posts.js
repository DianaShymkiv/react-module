import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value));
    },[]);
    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;