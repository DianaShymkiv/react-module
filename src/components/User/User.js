import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css';

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <Link to={id.toString()} state={user} className={css.user}>{name}</Link>
        </div>
    );
};

export {User};