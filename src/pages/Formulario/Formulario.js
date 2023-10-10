import React from 'react'
import { Hero } from './components'
import { EnviarForm, Accordion } from '../../components'

export default function Formulario({ isHasTitle }) {
    return (
        <div className='mb-20'>
            {isHasTitle ? <Hero /> : null}
            <EnviarForm isHasTitle={isHasTitle} />
            {isHasTitle?
                <div className='container'>
                    <Accordion />
                </div>
                :
                null
            }
        </div>
    )
}
