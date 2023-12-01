import { Navigate } from 'react-router-dom';

export default function Auth({ children }) {

    const isLogged = localStorage.getItem('token');

    return isLogged ? <Navigate to='/' /> : children

}
