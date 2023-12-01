import { useState } from "react";
import { Hero } from "./components";
import { renderBusers } from "./data";

export default function BuscarApuntes() {

    const [buscars, setBuscars] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    return (

        <div className='buscar-apuntes'>

            <Hero buscars={buscars} setBuscars={setBuscars} />

            <section className='products my-5'>

                <div className='container'>

                    <div> {renderBusers(buscars, activeIndex, setActiveIndex)} </div>

                </div>

            </section>

        </div>
    );
}
