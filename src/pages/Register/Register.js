import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { SignUpWithGoogle } from "../../components";
import { Auth } from "../../apis/apis";

const handelChangeInput = (name, value, state) => {
    return state(perv => ({ ...perv, [name]: value }));
}

const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        nombre: "",
        apellidos: ""
    });

    const handelSubmit = e => {
        e.preventDefault();

        const auth = new Auth('https://apiapn.copisterialowcost.info/register');

        auth.postRegister(formData);

    }


    return (
        <div className="pt-[7rem] pb-[3rem] flex justify-center items-center bg-[var(--primary)]">

            <div className="form-container w-[30rem] m-auto p-[8px] border border-[#ccc] bg-[#f5f5f5] rounded-[8px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>

                <form onSubmit={handelSubmit} className="border-b-[4px] border-b-[#ccc]">

                    <div className="input-container">

                        <input type="nombre" id="nombre" placeholder="Nombre" onChange={e => handelChangeInput('nombre', e.target.value, setFormData)} name="nombre" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.nombre} />

                    </div>

                    <div className="input-container">

                        <input type="apellidos" id="apellidos" placeholder="Apellidos" onChange={e => handelChangeInput('apellidos', e.target.value, setFormData)} name="apellidos" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.apellidos} />

                    </div>
                    <div className="input-container">

                        <input type="email" onChange={e => handelChangeInput('email', e.target.value, setFormData)} id="email" name="email" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            placeholder={"Correo electrónico"} />

                    </div>

                    <div className="input-container">

                        <input type="password" onChange={e => handelChangeInput('password', e.target.value, setFormData)} id="password" name="password" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            placeholder={"Contraseña"} />

                    </div>

                    <Button variant="contained" type="submit" className='!p-2 !px-5 w-full !my-4 !font-bold !text-[20px] !bg-[#ffc559] !text-[#212529]' style={{ textTransform: "initial" }}>

                        Registrar

                    </Button>

                </form>


                <div className="google-btn-container pt-[2rem] flex items-center justify-center mb-4">

                    <SignUpWithGoogle />

                </div>

            </div>

        </div>
    );
};

export default Register;
