import React from 'react';

const User = ({user}) => {
    return (
        <div className='block'>
            <div><b>ID:</b> {user.id}</div>
            <div><b>Name:</b> {user.name}</div>
            <div><b>Username:</b> {user.username}</div>
            <div><b>email:</b> {user.email}</div>
        </div>
    );
};

export default User;