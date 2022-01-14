import React, {useEffect, useState} from 'react';
import {getUserById} from "../../services/api";

const UserDetails = ({userId,getPost}) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    useEffect(() => {
       getUserById(userId).then(value => setUser(value))
    }, [userId])


    const getPostId = (id) => {
        getPost(id);
        // console.log(id)
    }

    return (
        <div>
            {user && (
                <div>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <div>username: {user.username}</div>
                    <div>email: {user.email}</div>
                    <div>street: {user.address.street}</div>
                    <div>suite: {user.address.suite}</div>
                    <div>city: {user.address.city}</div>
                    <div>zipcode: {user.address.zipcode}</div>
                    <div>lat: {user.address.geo.lat}</div>
                    <div>lng: {user.address.geo.lng}</div>
                    <div>phone: {user.phone}</div>
                    <div>website: {user.website}</div>
                    <div>companyName: {user.company.name}</div>
                    <div>catchPhrase: {user.company.catchPhrase}</div>
                    <div>bs: {user.company.bs}</div>
                    <button className='button' onClick={() => getPostId(userId)  }>get details</button>
                </div>

            )}
        </div>
    );
};

export default UserDetails;