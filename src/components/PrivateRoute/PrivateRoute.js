import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {

    const isLogged = localStorage.getItem('token');

    return isLogged ? children : <Navigate to='/login' />

}
