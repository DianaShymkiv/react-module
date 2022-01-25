import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";
import Comment from "../../components/Comment/Comment";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        commentService.getAllById(id).then(value => setComments([...value]))
    }, [id]);

    return (
        <div>
            <div>
                <h3>Comments</h3>
                {comments.map(value => <Comment key={value.id} comment={value}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {CommentsPage};