import { useState } from "react";
import { Hero } from "./components";
import { renderBusers } from "./data";



export default function BuscarApuntes() {

    const [buscars, setBuscars] = useState([]);

    return (

        <div className='buscar-apuntes'>

            <Hero buscars={buscars} setBuscars={setBuscars} />

            <section className='products my-5'>

                <div className='container'>

                    <div className={`${buscars?.length ? "grid grid-cols-12 gap-5" : ""}`}> {renderBusers(buscars)} </div>

                </div>

            </section>

        </div>
    );
}
