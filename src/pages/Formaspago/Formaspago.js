import React from 'react'

export default function Formaspago() {
    return (

        <div className='container py-10'>

            <h1 className='pb-3 font-medium text-[35px] border-b mb-5'>Formas de Pago</h1>

            <h4 className='opacity-70 font-[300] mb-5'>· Tarjeta de crédito o débito ·</h4>

            <p className='mb-3 opacity-80 text-[14px]'>Ofrecemos la opción de pago con tarjeta sistema de pago seguro canal redsys</p>
            <p className='mb-10 opacity-80 text-[14px]'>Este metodo de pago no tiene comisión</p>

            <h4 className='opacity-70 font-[300] mb-5'>¿Qué tarjetas se aceptan?</h4>

            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>Trabajamos con el banco, que conecta con REDSYS que proporciona una pasarela de pago 100% segura (TPV virtual).
                    Aceptamos pagos con VISA, VISA ELECTRON, MASTERCARD Y MAESTRO.</li>

            </ul>

            <h4 className='opacity-70 font-[300] mb-5'>¿Cómo funciona el pago con tarjeta?</h4>

            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>La solución a los pagos en Internet consiste en un TPV virtual residente en los servidores de SERVIRED (a través de su filial Redsys) y que es accesible a través de la Red por parte de los comercios desde sus tiendas virtuales.
                    www.apuntesconnota.es se conecta a una plataforma externa automáticamente con REDSYS con todos los protocolos de seguridad y el cliente podrá introducir sus datos de seguridad y sus claves para realizar la compra.
                    Además por su seguridad, se le enviará una clave con un número de 6 cifras al teléfono vinculado a la tarjeta de la compra. Obteniendo una respuesta inmediata con la resolución del proceso de pago.</li>

            </ul>
            <h4 className='opacity-70 font-[300] mb-5'>¿Es seguro comprar con tarjeta en internet?</h4>


            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>Hoy en día es completamente seguro realizar las compras con tarjeta a través de internet, gracias a los protocolos de seguridad internacional que cumplen los bancos.
                    Además solo se efectuará la compra si introduce el código que le envían al instante a su teléfono móvil vinculado a la tarjeta.
                    El banco le garantiza la máxima seguridad en los pagos realizadas con las tarjetas VISA, VISA ELECTRON, MASTERCARD y MAESTRO.</li>

            </ul>

            <h4 className='opacity-70 font-[300] mb-5'>¿Qué medidas de seguridad utilizawww.apuntesconnota.es ?</h4>


            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>Con Verified by Visa y MasterCard SecureCode se consigue la autenticación del titular al realizar la compra, es decir, que el cliente se identifique como legítimo titular de la tarjeta que está utilizando. Para ello, durante el proceso de compra, que realizará de forma similar a la actual, se le presentará una página para que introduzca una clave de autenticación. Este sistema recibe el nombre común de CES (Comercio Electrónico Seguro).</li>
                <li className='opacity-80 mb-1 text-[14px]'>Su propio Banco seguirá sus propios protocolos de autentificación y podrá mandarle al teléfono móvil asociado a la tarjeta, una clave de cifras que deberá de introducir para verificar la compra u otros sistemas que estime oportunos para adaptarse a la normativa.</li>

            </ul>

            <h4 className='opacity-70 font-[300] mb-5'>· Transferencia bancaria ·</h4>

            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>BANCO SABADELL - Cuenta nº  ES93 0081 5543 5000 0128 8035 - Haga Referencia a su nº encargo y nombre </li>
                <li className='opacity-80 mb-1 text-[14px]'>Si elige transferencia bancaria para comprar productos en nuestra tienda online debe hacer una transferencia bancaria a un nuestra cuenta corriente.</li>
                <li className='opacity-80 mb-1 text-[14px]'>El cliente debe por tanto ordenar cuanto antes la transferencia de efecto inmediato o diferido, a la cuenta bancaria por el importe exacto total del pedido.</li>
                <li className='opacity-80 mb-1 text-[14px]'>El envío del producto comprado no se realiza hasta que está efectivo el importe en nuestra cuenta, pudiendo tardar este proceso aproximadamente 2-3 días más de lo habitual.</li>

            </ul>

            <h4 className='opacity-70 font-[300] mb-5'>· Bizum ·</h4>

            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'>Posibilidad de pago mediante Bizum, pago mediante aplicación móvil y traspaso del importe de la compra a nuestra cuenta de comercio electronico.</li>
                <li className='opacity-80 mb-1 text-[14px]'>Seguridad: Cumple con PSD2, clave única Bizum ( PIN clave bizum de cuatro digitos ) asociada para el pago en comercio eléctronico + OTP</li>
                <li className='opacity-80 mb-1 text-[14px]'>El importe mínimo es de 5€</li>

            </ul>

            <h4 className='opacity-70 font-[300] mb-5'> PayGold ·</h4>

            <ul className='mb-10 px-8' style={{ listStyle: "initial" }}>

                <li className='opacity-80 mb-1 text-[14px]'></li>
                <li className='opacity-80 mb-1 text-[14px]'>Se envía un mail a su cuenta de correo electrónico como cliente o sms al movil indicado, con un enlace para la realización del pago.</li>
                <li className='opacity-80 mb-1 text-[14px]'>Una vez le llegue ese enlace, aceptará y formalizará el pago por medio de pago con tarjeta o bizum.</li>
                <li className='opacity-80 mb-1 text-[14px]'>Ese enlace será válido, durante un tiempo máximo de 24h. para ejecutar el pago, pasado ese tiempo, el enlace carecerá de validez.</li>
                <li className='opacity-80 mb-1 text-[14px]'></li>
                <li className='opacity-80 mb-1 text-[14px]'></li>

            </ul>
        </div>
    )
}
