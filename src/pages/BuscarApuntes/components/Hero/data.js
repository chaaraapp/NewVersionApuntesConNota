import { SwiperSlide } from 'swiper/react';
import { Dropdown } from '../../../../components'

const renderBusers = (selectedAsignatura, asignaturaList, setSelectedAsignatura, CursoList, selectedCurso, setSelectedCurso) => {
    return (
        <div className='content col-span-12 lg:col-span-8 xl:col-span-9 xl:ms-8'>

            <div className='plans hidden lg:flex items-start'>

                <img src={require('../../../../assetes/images/buscar apuntes - cuaderno verde.png')} alt='' className="w-[200px] xl:block hidden" />

                <div className='advantages !text-white flex-wrap flex items-center justify-between my-10 xl:my-10'>

                    <p className='text-[20px] sm:text-[25px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Apuntes impresos</span>

                    </p>

                    <p className='text-[20px] sm:text-[25px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Autores con un 7 o más</span>

                    </p>

                    <p className='text-[20px] sm:text-[25px] w-[48%] min-w-[250px] !text-start m-auto'>
                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Temario completo</span>

                    </p>

                    <p className='text-[20px] sm:text-[25px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Sin publicidad</span>

                    </p>

                </div>

            </div>

            <div className='filter flex items-center flex-wrap lg:flex-nowrap p-5 bg-[#f4f4f4] lg:bg-[#ffc559]'>

                <Dropdown list={CursoList} selectedItem={selectedCurso} setEmptyState={setSelectedAsignatura} emptyStateValue={'Asignatura'} setSelectedItem={setSelectedCurso} styling={'w-full lg:!w-[38%]'} />

                <Dropdown selectedItem={selectedAsignatura} setEmptyState={setSelectedCurso} emptyStateValue={'Curso'} setSelectedItem={setSelectedAsignatura} list={asignaturaList} styling={'lg:w-[60%] w-full mb-3 lg:mb-0 lg:ms-5'} />

            </div>
        </div>
    )
}

const items = [
    { title: "Apuntes impresos" },
    { title: "Temario completo" },
    { title: "Autores con un 7 o más" },
    { title: "Sin Publicidad " },
    { title: "Apuntes impresos" },
    { title: "Temario completo" },
    { title: "Autores con un 7 o más" },
    { title: "Sin Publicidad " },
    { title: "Apuntes impresos" },
    { title: "Temario completo" },
    { title: "Autores con un 7 o más" },
    { title: "Sin Publicidad " },
];

const swiperItems = items.map((item, index) => {

    return <SwiperSlide key={index}>

        <div className='flex items-center'>

            <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className='w-[25px] inline-block me-2' />

            <h3 className='text-[20px] text-white whitespace-nowrap overflow-hidden' style={{ maxWidth: "calc(100% - 25px)" }}>{item.title}</h3>

        </div>

    </SwiperSlide>

})


export {
    swiperItems,
    renderBusers
}