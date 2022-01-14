import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import {getPosts} from "../../services/api";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(userId).then(value => setPosts(value))
    },[userId]);

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;