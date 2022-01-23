import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";
import css from "./PostPage.module.css";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    const [query, setQuery] = useSearchParams(); // схоже на useState але працює з урлою

    useEffect(() => {
        postService.getAll().then(value => {
            const title = query.get('title'); // за допомогою query якраз дістаємо ці квері парамси з урли по тайтлу який задали і тільки через get
            let filter = [...value];
            if (title) {
                filter = value.filter(post => post.title.includes(title))
            }
            setPosts(filter);
        })
    }, [query]);

    const submit = (e) => {
        e.preventDefault();
        setQuery({title: e.target.search.value});
    }

    return (
        <div className={css.flex}>
            <div>
                <form onSubmit={submit} className={css.form}>
                    <input type="search" name='search'/>
                    <button>Search</button>
                </form>
                <h1>Posts</h1>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostPage};