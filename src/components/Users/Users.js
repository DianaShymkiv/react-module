import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {getUsers} from "../../services/api";

const Users = ({getId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       getUsers().then(value => setUsers(value));
    },[]);

    const getUserId = (id) => {
        getId(id);
    // console.log(id)
    }

    return (
        <div>
            {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
        </div>
    );
};

export default Users;