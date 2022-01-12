import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;