import { useState } from "react";
import { StepOne, StepTwo, StepThree } from "./components";

export default function UnivePopup() {

    const [step, setStep] = useState(0);

    const [visible, setVisible] = useState(true);

    return (

        <div className={`fixed left-0 top-0 w-full h-[100vh] flex items-center justify-center z-[1000] transition ${visible ? "opacity-100 scale-100 visible" : "opacity-0 scale-0 invisible"}`}>

            <div className="shadow-lg rounded-[10px] px-[50px] pt-[50px] pb-[100px] bg-white flex justify-center flex-col relative min-h-[545px] w-[855px]">

                {step === 0 && <StepOne setStep={setStep} />}
                {step === 1 && <StepTwo setStep={setStep} />}
                {step === 2 && <StepThree setVisible={setVisible} />}

            </div>

        </div>

    )

}
