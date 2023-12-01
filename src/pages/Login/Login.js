import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { SignUpWithGoogle } from "../../components";
import { useHandleSubmit } from "./data";


const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState("")

    const [formData, setFormData] = useState({ email: "", password: "", });

    const [formErrors, setFormErrors] = useState({ email: "", password: "", });

    const { handelSubmit } = useHandleSubmit(formData);

    return (
        <div className="pt-[7rem] pb-[3rem] flex justify-center items-center bg-[var(--primary)] px-5 sm:px-0">

            <div onSubmit={handelSubmit} className="container form-container w-[30rem] m-auto p-[8px] border border-[#ccc] bg-[#f5f5f5] rounded-[8px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>

                <form className="border-b-[4px] border-b-[#ccc]">

                    <div className="input-container">

                        <input type="email" id="email" name="email"
                            className="w-full p-[10px] mb-[8px] rounded-[4px]" value={formData.email} onChange={e => setFormData(perv => ({ ...perv, email: e.target.value }))}
                            placeholder={!formErrors?.email ? "Correo electrónico" : formErrors.email} style={!formErrors?.email ? { border: '1px solid #ccc' } : { border: '1px solid red' }} />

                    </div>

                    <div className="input-container">

                        <input type="password" id="password" name="password" className="w-full p-[10px] mb-[8px] rounded-[4px]" value={formData.password}
                            onChange={e => setFormData(perv => ({ ...perv, password: e.target.value }))} placeholder={!formErrors?.password ? "Contraseña" : formErrors.password} style={!formErrors?.password ? { border: '1px solid #ccc' } : { border: '1px solid red' }} />

                        {errorMessage ? <p className="error-message">{errorMessage}</p> : ""}

                    </div>

                    <Button variant="contained" type="submit" className='!p-2 !px-5 w-full !my-4 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}> Iniciar sesión </Button>

                    <div className="link-container-olvide-contraseña">

                        <Link to="/reset-password" className="text-[#007bff] inline-block font-bold">He olvidado la contraseña</Link>

                    </div>

                </form>


                <div className="google-btn-container pt-[2rem] flex items-center justify-center mb-4">

                    <SignUpWithGoogle />

                </div>

                <div className="link-container flex items-center justify-center flex-col">

                    <p className="texto">¿No tienes una cuenta?</p>

                    <Link to="/signup" className="text-[#0056b3] font-bold">Crear una nueva cuenta</Link>

                </div>

            </div>

        </div>
    );
};

export default LoginForm;
