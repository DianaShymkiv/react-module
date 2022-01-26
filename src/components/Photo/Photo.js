import React from 'react';

const Photo = ({photo}) => {
    const {thumbnailUrl, title}= photo;

    return (
        <div>
            <div>Title: {title}</div>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export default Photo;