import { renderCategories } from './data';

export default function Hero() {

    return (
        <section className='p-4 bg-[#4bc383] text-white'>

            <div className='container grid grid-cols-12 items-center'>

                <p className='col-span-12 lg:col-span-4 lg:px-16  text-[25px] sm:text-[30px] text-center lg:text-start md:text-[50px] leading-[1]'>
                    <span className='lg:whitespace-nowrap'>No regales</span>
                    <br className='hidden lg:block' />
                    <span className='lg:whitespace-nowrap'>tus apuntes</span>
                    <br className='hidden lg:block' />
                    <span className='lg:whitespace-nowrap'>en otras</span>
                    <br className='hidden lg:block' />
                    plataformas

                </p>

                <div className='hidden lg:grid col-span-4'>   <img src={require("../../../../assetes/images/hero-bg.png")} className='max-w-full' /></div>

                <div className='text-white mb-[13px] text-[25px] col-span-12 lg:col-span-4 flex justify-center flex-col'>

                    <p className='my-3 lg:my-0'>Requisitos:</p>

                    <div className='requisitos-card'>{renderCategories()}</div>

                </div>

            </div>

        </section>
    )
}
