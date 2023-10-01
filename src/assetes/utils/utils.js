const logout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('email');

    return window.location.href = "/login";
}

export {
    logout
}