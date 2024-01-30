import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StepThree({ setVisible }) {


    return (

        <div className="flex items-center justify-center flex-col">

            <FontAwesomeIcon icon={faClose} onClick={_ => setVisible(false)} className='absolute right-5 top-5 text-[30px] cursor-pointer text-[#949595]' />

            <h1 className='text-[#004554] lg:text-[50px] font-medium mb-8'>Registro completado!</h1>

            <h5 className='text-[#004554] lg:text-[35px] leading-9 font-medium text-center mb-8'>Ya puedes empezar a comprar <br /> o vender tus apuntes</h5>

            <h5 className='lg:text-[50px] text-[#48c480] font-medium text-center'>Mucha suerte!</h5>

        </div>

    )

}
