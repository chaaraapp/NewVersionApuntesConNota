import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


const ResetPassword = () => {

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")

    const [formData, setFormData] = useState({
        correo: "",
    });

    const [formErrors, setFormErrors] = useState({
        correo: "",
    });

    return (
        <div className="pt-[7rem] pb-[3rem] flex justify-center items-center bg-[var(--primary)] px-5 sm:px-0">

            <div className="form-container w-[30rem] m-auto p-[8px] border border-[#ccc] bg-[#f5f5f5] rounded-[8px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>

                <h2 className="text-center text-[18px] text-[#004554]">Recuperar Contraseña</h2>

                <p className="font-bold leading-[1.8] mb-3 text-[14px]">  Introduce la dirección de correo electrónico con la que te registraste y te enviaremos un enlace para restablecer tu contraseña. </p>

                <form>

                    <div className="input-container">

                        <input type="correo" id="correo" name="correo" className="w-full p-[10px] mb-[8px] rounded-[4px]" value={formData.correo} placeholder={!formErrors?.correo ? "Correo electrónico" : formErrors.correo} style={!formErrors?.correo ? { border: '1px solid #ccc' } : { border: '1px solid red' }} />

                    </div>

                    <Link to={'/formulario-venta'}>

                        <Button variant="contained" className='!p-2 !px-5 w-full !my-4 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}>Enviar</Button>

                    </Link>

                </form>

                <Link to={'/login'} className="text-[#0056b3] font-bold mt-2 block">Cancelar</Link>

            </div>

        </div>
    );
};

export default ResetPassword;
