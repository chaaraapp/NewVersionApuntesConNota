import React from 'react'
import { InformaciónPersonal, MisPedidos, SaldoFavor } from './components'
import Formulario from '../../../Formulario'

export default function Categories({ setSteper, steper }) {

    return (

        <div className='col-span-12 lg:col-span-9 px-5 py-6 rounded-[5px] border'>

            {steper === 1 || steper === 3 ? <InformaciónPersonal /> : null}

            {steper === 2 ? <MisPedidos /> : null}

            {steper === 4 ? <Formulario isHasTitle={false} /> : null}

            {steper === 5 ? <SaldoFavor /> : null}

        </div>

    )
}
