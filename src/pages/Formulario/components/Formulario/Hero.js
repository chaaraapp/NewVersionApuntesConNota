import { renderCategories } from './data';

export default function Hero() {

    return (
        <section className='p-4 bg-[#4bc383] text-white'>

            <div className='container grid grid-cols-12 items-center'>

                <h1 className='col-span-12 lg:col-span-4 lg:px-24 text-[20px] sm:text-[30px] text-center lg:text-start md:text-[50px] font-bold leading-[1]'>
                    No regales
                    <br className='hidden lg:block' />
                    tus apuntes
                    <br className='hidden lg:block' />
                    en otras
                    <br className='hidden lg:block' />
                    plataformas

                </h1>

                <div className='hidden lg:grid place-content-center col-span-4'>   <img src={require("../../../../assetes/images/hero-bg.png")} className='max-w-full' /></div>

                <div className='text-white font-bold mb-[13px] text-[20px] col-span-12 lg:col-span-4 flex items-center justify-center flex-col'>

                    <h2 className='my-3 lg:my-0'>Requisitos:</h2>

                    <div className='requisitos-card'>{renderCategories()}</div>

                </div>

            </div>

        </section>
    )
}
