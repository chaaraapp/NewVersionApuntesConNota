export const renderResumenApuntesData = (resumenApuntesData) => {

    return resumenApuntesData.reverse()?.map((item, index) => {

        return <div className='p-3 col-span-12 lg:col-span-6 mb-3'>

            <div key={index} className='p-8 border rounded-[10px]'>

                <div className='flex items-center justify-between mb-3'>

                    <h6 className='mb-0'>{item?.asignatura}</h6>

                    <p className='p-1 mb-0 text-white'

                        style={{ background: item.estado == 0 ? "orange" : item.estado == 1 ? "yellow" : item.estado == 2 ? "red" : item.estado == 3 ? "green" : "black", borderRadius: "5px", fontSize: "15px", }}>

                        {item.estado == 0 ? "Solicitud enviada" : item.estado == 1 ? "En revisión" : item.estado == 2 ? "Rechazado" : item.estado == 3 ? "Activo" : "Error"}

                    </p>

                </div>

                <div className='info lh-sm text-[15px] opacity-70' >

                    <p> Universidad de {item?.universidad}</p>

                    <p> Facultad De {item?.facultad} </p>

                    <p>{item?.grado}</p>

                    <p> Curso - {item?.curso} </p>

                    <p> Ano - {item?.anoAcademico} </p>

                </div>

                <div class='info lh-sm mt-3 text-[15px] opacity-70' >

                    <p>

                        <strong>Descripción:</strong>

                        {item?.descripcion}

                    </p>

                    <p>

                        <strong>Profesor:</strong>

                        {item?.nombreProfesor}

                    </p>

                    <p>

                        <strong>Nota: </strong> {item?.nota}

                    </p>

                    <p>

                        <strong>Compras: </strong> 0

                    </p>

                </div>

            </div>

        </div>

    })

}