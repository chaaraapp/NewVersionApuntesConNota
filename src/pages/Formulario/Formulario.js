import { Hero } from './components'
import { EnviarForm, Accordion } from '../../components'
import { renderResumenApuntesData } from './data'


export default function Formulario({ isHasTitle, resumenApuntesData }) {

    return (
        <div className='mb-20'>

            {isHasTitle ? <Hero /> : null}

            <EnviarForm isHasTitle={isHasTitle} />

            {isHasTitle && <div className='container'>  <Accordion /></div>}

            {!isHasTitle && <h3 className='mt-5 mb-5'>Resumen apuntes</h3>}

            {!isHasTitle && <div className='grid grid-cols-12 gap-5 p-5'>{renderResumenApuntesData(resumenApuntesData)}</div>}

        </div>
    )
}
