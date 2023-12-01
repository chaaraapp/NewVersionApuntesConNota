import "./index.css";

export default function Loader({ progress }) {
    return (

        <div className='fixed left-0 top-0 z-[1000] w-full h-[100vh] bg-[#101010] flex items-center justify-center'>

            <h2 className='text-white transition-all text-[30px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999999999999]'>{parseInt(progress)}<span>%</span></h2>

            <div class="container relative w-[900px] flex justify-around">

                <div class="card">

                    <div class="box">

                        <div class="percent relative w-[150px] h-[150px] rounded-full bg-[#222] z-[1000]" style={{ boxShadow: 'inset 0 0 60px #000' }}>

                            <svg className="relative w-[150px] h-[150px] z-[1000]">

                                <circle cx="70" cy="70" r="70" ></circle>

                                <circle cx="70" cy="70" r="70" style={{ strokeDashoffset: `calc(440 - (440 * ${parseInt(progress)}) / 100)` }}></circle>

                            </svg>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
