import Swal from "sweetalert2";

const logout = () => {

    localStorage.removeItem('token');

    localStorage.removeItem('email');

    return window.location.href = "/login";
}
const fireSwal = (icon, title, text) => {
    return Swal.fire({
        icon,
        title,
        text
    });
}
export {
    logout,
    fireSwal
}