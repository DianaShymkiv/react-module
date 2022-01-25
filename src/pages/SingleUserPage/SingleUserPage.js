import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from './SingleUserPage.module.css';

const SingleUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }
        userService.getById(id).then(value => setUser({...value}));
    }, [id]);

    return (
        <div>
            {user && (
                <div className={css.text}>
                    <div><b>Id:</b> {user.id}</div>
                    <div><b>Name:</b> {user.name}</div>
                    <div><b>Username:</b> {user.username}</div>
                    <div><b>Email:</b> {user.email}</div>
                    <div><b>Address:</b></div>
                    <div><b>Street:</b> {user.address.street}</div>
                    <div><b>Suite:</b> {user.address.suite}</div>
                    <div><b>City:</b> {user.address.city}</div>
                    <div><b>Zipcode:</b> {user.address.zipcode}</div>
                    <div><b>Geo:</b></div>
                    <div><b>lat:</b> {user.address.geo.lat}</div>
                    <div><b>lng:</b> {user.address.geo.lng}</div>
                    <div><b>Phone:</b> {user.phone}</div>
                    <div><b>Website:</b> {user.website}</div>
                    <div><b>Company:</b></div>
                    <div><b>Name:</b> {user.company.name}</div>
                    <div><b>Catch Phrase:</b> {user.company.catchPhrase}</div>
                    <div><b>bs:</b> {user.company.bs}</div>
                </div>
            )}
            <Link to={'userPosts'}>
                <button className={css.button}>User posts</button>
            </Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SingleUserPage};