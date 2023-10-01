import React from 'react'
import { Hero, About, NoteVerse } from './components'
import NoteNexus from './components/NoteNexus'
import { Accordion } from '../../components'

export default function Home() {
    return (
        <div>

            <Hero />

            <About />

            <NoteVerse />

            <NoteNexus />

            <div className='container !my-20'>

                <Accordion />
                
            </div>

        </div>
    )
}
