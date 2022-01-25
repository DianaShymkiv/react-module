import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import {User} from "../../components/User/User";
import css from './UserPage.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={css.flex}>
            <div className={css.text}>
                <h1>Users</h1>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};