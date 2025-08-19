// import React, { useEffect, useState } from 'react'

// const HooksExample = () => {

//     const [counter, setCounter] = useState(0)
//     const [isRunning, setIsRunning] = useState(false)


//     useEffect(() => {
//         if (isRunning) {
//             const intervalData = setInterval(() => {
//                 setCounter((prev) => prev + 1)
//             }, 100);
//         }

//         return () => {
//             clearInterval(intervalData)
//         }
//     }, [third])



//     return (

//         <div className='flex flex-col justify-center items-center mt-20'>
//             <h1>stop watch : {counter}</h1>
//             <div className='flex gap-5 my-3.5'>
//                 <button onClick={() => setIsRunning(true)} className='px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-semibold cursor-pointer'>Start</button>
//                 <button onClick={handleStop} className='px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-semibold cursor-pointer'>Stop</button>
//                 <button onClick={handleReset} className='px-3.5 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-semibold cursor-pointer'>Restart</button>
//             </div>
//         </div>
//     )
// }

// export default HooksExample;