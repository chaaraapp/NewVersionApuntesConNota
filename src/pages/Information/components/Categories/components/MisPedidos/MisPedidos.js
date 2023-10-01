import React from "react";

export default function MisPedidos() {
    return (
        <div>
            <div className="select-none mb-1">

                <input className='me-2 cursor-pointer' type='checkbox' id='PedidosRealizados' />

                <label className='cursor-pointer' htmlFor='PedidosRealizados'>Pedidos realizados</label>

            </div>

            <div className='select-none mb-1'>

                <input className='me-2 cursor-pointer' type='checkbox' id='Seguimientos' />

                <label className='cursor-pointer' htmlFor='Seguimientos'>Seguimientos de envíos </label>

            </div>

            <div className='select-none mb-1'>

                <input className='me-2 cursor-pointer' type='checkbox' id='electrónica' />

                <label className='cursor-pointer' htmlFor='electrónica'>Factura electrónica</label>

            </div>

            <div className='select-none mb-1'>

                <input className='me-2 cursor-pointer' type='checkbox' id='Notificaciones' />

                <label className='cursor-pointer' htmlFor='Notificaciones'>Notificaciones sobre el estado de mi pedido</label>
            </div>

            <div className='select-none mb-3'>
                <input className='me-2 cursor-pointer' type='checkbox' id='QuieroBeneficiarme' />

                <label className='cursor-pointer' htmlFor='QuieroBeneficiarme'>
                    Quiero beneficiarme de las ventajas de tener Cuenta y recibir
                    SuperOfertas, promociones <br className="hidden lg:inline-block" /> comerciales personalizadas por parte de
                    nuestros partners
                </label>

            </div>
            <small>
                Doy consentimiento para ver/ejecutar las siguientes acciones
            </small>
        </div>
    );
}
