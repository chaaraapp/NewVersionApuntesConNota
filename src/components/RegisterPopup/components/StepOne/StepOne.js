import { Button } from "@mui/material"
import { Fragment } from "react"

export default function StepOne({ setStep }) {

    return (
        <Fragment>

            <h1 className='text-[#004554] lg:text-[50px] font-medium'>Ya eres parte de Apuntes Con Nota!</h1>

            <h5 className='text-[#004554] lg:text-[30px] leading-9 font-medium text-start mb-8'>Cuentanos un poco mas sobre ti...</h5>

            <div className='flex items-center justify-between'>

                <div className='w-[50%]'>

                    <h3 className='text-[#004554] lg:text-[40px]'>En que <br /> universidad <br /> estudias?</h3>

                    <input type="text" className="border-2 border-[#ccc] mt-2 w-[300px] p-2 rounded-[5px]" placeholder="universidad...." />

                </div>

                <div className="flex items-center justify-center relative w-[50%]">

                    <img src={require('../../../../assetes/images/question-mark.png')} className="w-[420px] absolute -left-12 top-[-135px] z-[10]" />

                </div>


            </div>

            <Button variant="contained" onClick={_ => setStep(1)} className="!bg-[#ffc559] !text-[#004554] !capitalize !text-[20px] !px-12 !rounded-none !font-bold !w-fit z-[20] !absolute !right-5 !bottom-4">Siguiente</Button>

        </Fragment>
    )
}
