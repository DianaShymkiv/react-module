import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <div>ID: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>Username: {user.username}</div>
            <div>email: {user.email}</div>
        </div>
    );
};

export default User;