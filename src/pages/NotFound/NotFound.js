import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (

        <div className="flex items-center justify-center h-[70vh] ">

            <div className="text-center">

                <h1 className="text-[#FF5722] text-[60px] !font-sans font-bold">Error 404</h1>

                <p className="my-5">Lo sentimos, la página que estás buscando no existe.</p>

                <Link to="/" className="text-[#2196F3] transition-all !font-bold hover:text-[#1565C0]">Volver a la página de inicio</Link>

            </div>

        </div>
    )
}
