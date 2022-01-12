import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value));
    },[]);
    const filteredPosts = posts.filter(post => post.userId === 1);
    return (
        <div className='w50 border'>
            {filteredPosts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;