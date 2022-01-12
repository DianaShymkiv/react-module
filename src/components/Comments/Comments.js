import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/api";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments(value));
    },[]);
    return (
        <div className='border'>
            {comments.map(value => <Comment key={value.id} comment={value}/> )}
        </div>
    );
};

export default Comments;