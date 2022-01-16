import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api";
import User from "../User/User";

const Users = ({form: {name, username, email}}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, [])

    return (
        <div>
            {users.filter(user => user.name.includes(name) && user.username.includes(username) && user.email.includes(email)).map(value =>
                <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;