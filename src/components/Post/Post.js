import React from 'react';
import {Link} from "react-router-dom";

import css from "./Post.module.css";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <ul>
                <li>
                    <Link to={id.toString()} state={post}  className={css.post}> {title} </Link>
                </li>
            </ul>
        </div>
    );
};

export default Post;