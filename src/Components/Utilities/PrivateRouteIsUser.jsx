import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRouteIsUser = ({children, ...rest}) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
    const location = useLocation();
    
    return (
            (currentUser)
            ? <Outlet />
            : <Navigate to='/login' state={{ from : location }} replace />
    );
};

export default PrivateRouteIsUser;