import React from 'react';
import {Link} from "react-router-dom";

import css from './Album.module.css';

const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <ul>
                <li>
                    <Link to={id.toString() + '/photos'}
                          style={{marginTop: '5px'}}
                          className={css.album}>{title}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Album;