import { InformaciónPersonal, MisPedidos, SaldoFavor } from './components'
import Formulario from '../../../Formulario'
import { ToBeEditor } from '../../../../components'
import { useFetchEditorInfo } from './data';

export default function Categories({ steper }) {

    const { editorId, resumenApuntesData } = useFetchEditorInfo(steper);

    return (

        <div className='col-span-12 lg:col-span-9 px-5 py-6 rounded-[5px] border'>

            {steper === 1 || steper === 3 ? <InformaciónPersonal /> : null}

            {steper === 2 ? <MisPedidos /> : null}

            {steper === 4 ? editorId?.id ? <Formulario resumenApuntesData={resumenApuntesData} isHasTitle={false} /> : <ToBeEditor isHasTitle={false} /> : null}

            {steper === 5 ? <SaldoFavor /> : null}

        </div>

    )
}
