export default function Product() {

    return (

        <section className='products my-5 !mb-32'>

            <div className='container'>

                <div className='grid grid-cols-12 gap-2'>

                    <div className='col-span-12 lg:col-span-12 xl:col-span-5 mb-10 lg:mb-0'>

                        <div className='mb-4'>

                            <div className='flex items-center mb-2'>

                                <img alt='' src={require('../../../../assetes/images/home - signo más verde.png')} className='w-[40px] inline-block me-2' />

                                <h3 className='sm:text-[40px] text-[20px] font-bold text-[#004554]'>Apuntes impresos</h3>

                            </div>

                            <h3 className='text-[18px] font-medium ms-10'> Apuntes escritos a ordenador, impresos y encuadernados   con la mejor calidad</h3>

                        </div>

                        <div className='mb-4'>

                            <div className='flex items-center mb-2'>

                                <img src={require('../../../../assetes/images/home - signo más verde.png')} alt='' className='w-[40px] inline-block me-2' />

                                <h3 className='sm:text-[40px] text-[20px] font-bold text-[#004554]'> Temario completo  </h3>

                            </div>

                            <h3 className='text-[18px] font-medium ms-10'>

                                Nuestros apuntes contienen la asignatura al completo.
                                <br />
                                Olvidate de buscar tema por tema.

                            </h3>

                        </div>

                        <div className='mb-4'>

                            <div className='flex items-center mb-2 text-white'>

                                <img src={require('../../../../assetes/images/home - signo más verde.png')} alt='' className='w-[40px] inline-block me-2' />

                                <h3 className='sm:text-[40px] text-[20px] font-bold text-[#004554] sm:whitespace-nowrap'>  Autores con un 7 o más </h3>

                            </div>

                            <h3 className='text-[18px] font-medium ms-10'>Apuntes elaborados por alumnos que superaron la   asignatura con una nota minima de siete </h3>

                        </div>

                        <div className='mb-4'>

                            <div className='flex items-center mb-2'>

                                <img src={require('../../../../assetes/images/home - signo más verde.png')} alt='' className='w-[40px] inline-block me-2' />

                                <h3 className='sm:text-[40px] text-[20px] font-bold text-[#004554]'>  Sin Publicidad </h3>

                            </div>

                        </div>

                    </div>

                    <div className='col-span-12 lg:col-span-7 -order-1 lg:order-1'>

                        <img src={require('../../../../assetes/images/comprar apuntes - apuntes.png')} alt='' className='max-w-full lg:hidden xl:block w-[300px] m-auto lg:w-fit' />

                    </div>

                </div>

            </div>

        </section>
    )
}
