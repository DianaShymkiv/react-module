import React from 'react';
import {Link} from "react-router-dom";

import css from "./Post.modules.css";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            <Link to={id.toString()} state={post} className={css}> {title} </Link>
        </div>
    );
};

export default Post;