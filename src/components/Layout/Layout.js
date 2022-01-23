import React from 'react';
import {Link, Outlet, NavLink, useNavigate} from "react-router-dom";

import css from "./Layout.module.css";
import {useAuth} from "../../hooks/useAuth";

const Layout = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        logOut(() => navigate('/', {replace: true}))
    }
    return (
        <>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <button onClick={logout}>Log out</button>
                {/*link to = a href тільки при грефці сторінка перезавантажується, що не є добре*/}
                {/*NavLink -  спеціально для навігації, натиснутій урлі надає клас active*/}
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            {/*Outlet - в нього рендериться зміст наших компонент,,,  рендерить дочірні елементи які знаходяться в тегу <Layout> (App.js)*/}
            <div className={css.footer}>
                @ReactRouterDOM
            </div>
        </>
    );
};

export default Layout;