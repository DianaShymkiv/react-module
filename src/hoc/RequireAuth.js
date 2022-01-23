//hoc- hire ordered component

import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

import {useAuth} from "../hooks/useAuth";

const RequireAuth = ({children}) => {
    // children = UserPage
    const location = useLocation();
    const {user} = useAuth();

    if (!user){
        return <Navigate to={'/login'} state={location}/>
    }
    return children;
};

export default RequireAuth;