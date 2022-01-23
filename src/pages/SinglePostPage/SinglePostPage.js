import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate, NavLink, Link} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate(); // повертає екземпляр свого класу ( дозволяє ходити по історії )

    useEffect(() => {
        if (state) {
            setPost(state)
            return
        }

        // якщо в state є нащ пост, ми його виводимо і іншому випадку робимо запит на сервер (коли ми клікаємо на пост запит робиться лише раз
        // якщо вводимо id вручну в поле де є лінк то буде робитись запит на сервер
        // state це ключ з useLocation

        postService.getById(id).then(value => setPost({...value}));
    }, [id]);

    const buttonHome = () => {
        navigate('/');
        // navigate('/', {replace: true}); // вся історія після переходу затреться
    }

    const buttonBack = () => {
        navigate(-1) // на одну дію назад
    }

    return (
        <div>
            <button onClick={buttonHome}>Home</button>
            <button onClick={buttonBack}>Back</button>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export {SinglePostPage};