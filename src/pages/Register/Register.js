import { Button } from "@mui/material";
import { SignUpWithGoogle } from "../../components";
import { useHandleSubmit } from "./data";

const handelChangeInput = (name, value, state) => {
    return state(perv => ({ ...perv, [name]: value }));
}

const Register = () => {

    const { formData, setFormData, handelSubmit } = useHandleSubmit();

    return (
        <div className="pt-[7rem] pb-[3rem] flex justify-center items-center flex-col bg-[var(--primary)] px-5 sm:px-0">

            <h1 className="text-center mb-3 text-white font-normal text-[34px] max-w-[40rem]">¡Bienvenido a Apuntes Con Nota! <br /> Necesitas registrar tu cuenta para <br /> poder comprar o vender tus apuntes</h1>

            <div className="form-container w-[35rem] m-auto p-[8px] border border-[#ccc] bg-[#f5f5f5] rounded-[8px]" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>

                <form onSubmit={handelSubmit} className="border-b-[4px] border-b-[#ccc]">

                    <div className="input-container">

                        <input type="text" id="nombre" placeholder="Nombre" onChange={e => handelChangeInput('Nombre', e.target.value, setFormData)} name="Nombre" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.Nombre} />

                    </div>

                    <div className="input-container">

                        <input type="text" id="Apellidos" placeholder="Apellidos" onChange={e => handelChangeInput('Apellidos', e.target.value, setFormData)} name="Apellidos" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.Apellidos} />

                    </div>

                    <div className="input-container">

                        <input type="email" onChange={e => handelChangeInput('Email', e.target.value, setFormData)} id="Email" name="Email" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            placeholder={"Correo electrónico"} />

                    </div>

                    <div className="input-container">

                        <input type="text" id="Movil" placeholder="Movil" onChange={e => handelChangeInput('Movil', e.target.value, setFormData)} name="movil" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.Movil} />

                    </div>

                    <div className="input-container">

                        <input type="text" id="alias" placeholder="Alias" onChange={e => handelChangeInput('alias', e.target.value, setFormData)} name="alias" className="w-full p-[10px] mb-[8px] rounded-[4px]"
                            value={formData.alias} />

                    </div>

                    <div className="input-container">

                        <input type="password" onChange={e => handelChangeInput('Pass', e.target.value, setFormData)} id="Pass" name="Pass" className="w-full p-[10px] mb-[8px] rounded-[4px]"
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
