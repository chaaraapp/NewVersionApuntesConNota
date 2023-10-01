import { useEffect, useState } from "react";

export default function Timer() {
    // State variables for days, hours, minutes, and seconds
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Function to format the time value with leading zeros
    const formatTime = (value) => {
        return value.toString().padStart(2, "0");
    };

    // Function to calculate and update the time values
    const getTime = () => {
        const currentDate = new Date(); // Get the current date
        const targetDate = new Date(
            currentDate.getFullYear(),
            10 - 1,
            2,
            23,
            59,
            59
        ); // Set the target date to October 2nd, 23:59:59 of the current year

        const timeDifference = targetDate.getTime() - currentDate.getTime(); // Calculate the time difference in milliseconds

        if (timeDifference > 0) {
            const remainingSeconds = Math.floor(timeDifference / 1000); // Convert milliseconds to seconds

            setDays(Math.floor(remainingSeconds / (24 * 60 * 60)));
            setHours(Math.floor((remainingSeconds / (60 * 60)) % 24));
            setMinutes(Math.floor((remainingSeconds / 60) % 60));
            setSeconds(remainingSeconds % 60);
        } else {
            // The target date has already passed
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        }
    };

    // Run the getTime function every second using useEffect
    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div>

            <div
                className='timer-wrapper flex items-center justify-center relative flex-col'
                style={{
                    height: "95vh",
                    background:
                        "linear-gradient(90deg, rgba(129,150,187,1) 0%, rgba(78,112,162,1) 43%, rgba(42,72,134,1) 99%)",
                }}
            >
                <a
                    href='https://comprar.apuntesconnota.es'
                    target='_blank'
                    className='timer-btn absolute top-[72%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[var(--primary)] p-[8px] rounded-[5px] text-black'  >
                    Comprar los mejores apuntes
                </a>

                <div className='box shadow w-[600px] h-[300px] bg-[#625fc1] absolute left-[50%] top-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[10px]'></div>

                <div className='timer-container w-fit rounded-[10px] p-[30px] relative z-[55] flex items-center justify-between' style={{ background: "linear-gradient(90deg, rgba(82, 166, 239, 1) 0%, rgba(112, 132, 242, 1) 43%, rgba(127, 97, 240, 1) 99%)" }}>

                    {/* Timer component with days */}
                    <p className='p-2 sm:w-fit px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[40px] flex items-center justify-center my-[10px] mx-[20px] text-white capitalize sm:flex-col rounded-[5px] font-medium'>

                        <span className='mb-0'>{formatTime(days)}</span>

                        <span>días</span>

                    </p>

                    <p className='p-2 sm:w-fit space px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[80px] rounded-full my-[10px] mx-[20px] text-white font-medium'>
                        :
                    </p>

                    {/* Timer component with hours */}
                    <p className='p-2 sm:w-fit px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[40px] flex items-center justify-center my-[10px] mx-[20px] text-white capitalize sm:flex-col rounded-[5px] font-medium'>

                        <span className='mb-0'>{formatTime(hours)}</span>

                        <span>horas</span>

                    </p>

                    <p className='p-2 sm:w-fit space px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[80px] rounded-full my-[10px] mx-[20px] text-white font-medium'>
                        :
                    </p>

                    {/* Timer component with minutes */}
                    <p className='p-2 sm:w-fit px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[40px] flex items-center justify-center my-[10px] mx-[20px] text-white capitalize sm:flex-col rounded-[5px] font-medium'>

                        <span className='mb-0'>{formatTime(minutes)}</span>

                        <span>minuto</span>

                    </p>
                    <p className='p-2 sm:w-fit space px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[80px] rounded-full my-[10px] mx-[20px] text-white font-medium'>
                        :
                    </p>

                    {/* Timer component with seconds */}
                    <p className='p-2 sm:w-fit px-4 sm:px-8 me-2 bg-transparent text-[13px] sm:text-[40px] flex items-center justify-center my-[10px] mx-[20px] text-white capitalize sm:flex-col rounded-[5px] font-medium'>

                        <span className='mb-0'>{formatTime(seconds)}</span>

                        <span>segundo</span>

                    </p>

                </div>

            </div>
            
        </div>
    );
}
