import { Dropdown } from '../../../../components'

export const renderBusers = (selectedAsignatura, asignaturaList, setSelectedAsignatura, CursoList, selectedCurso, setSelectedCurso) => {
    return (
        <div className='content'>

            <div className='plans flex items-center justify-between'>

                <img src={require('../../../../assetes/images/buscar apuntes - cuaderno verde.png')} alt='' className="w-[250px]" />

                <div className='advantages flex-wrap flex items-center justify-between'>

                    <p className='font-medium text-[18px] sm:text-[35px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Apuntes impresos</span>

                    </p>

                    <p className='font-medium text-[18px] sm:text-[35px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Autores con un 7 o mas</span>

                    </p>

                    <p className='font-medium text-[18px] sm:text-[35px] w-[48%] min-w-[250px] !text-start m-auto'>
                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Temario completo</span>

                    </p>

                    <p className='font-medium text-[18px] sm:text-[35px] w-[48%] min-w-[250px] !text-start m-auto'>

                        <img src={require('../../../../assetes/images/buscar aountes - signo más azul.png')} alt='' className="w-[30px] inline-block" />

                        <span className='ms-2'>Sin publicidad</span>

                    </p>

                </div>

            </div>

            <div className='filter flex items-center p-5 bg-[#ffc559]'>

                <Dropdown selectedItem={selectedAsignatura} setSelectedItem={setSelectedAsignatura} list={asignaturaList} styling={'w-[60%] me-5'} />

                <Dropdown list={CursoList} selectedItem={selectedCurso} setSelectedItem={setSelectedCurso} styling={'!w-[38%]'} />

            </div>
        </div>
    )
}