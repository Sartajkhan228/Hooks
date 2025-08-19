import React, { useEffect, useState } from 'react'

const Return = () => {

    const [counter, setCounter] = useState(0)


    useEffect(() => {

        const intervalData = setInterval(() => {
            setCounter((prev) => {
                if (prev >= 1000) {
                    clearInterval(intervalData)
                    return prev
                }
                return prev + 1
            })

        }, 100);

        return () => {
            clearInterval(intervalData)

            for (let i = 0; i <= 10; i++) {
                console.log("i", i)
            }
            console.log('Interval cleared due to useEffect....')
        }
    }, [])

    return (

        <div className='flex flex-col justify-center items-center mt-7 border p-10 w-70 m-auto rounded-l-full'>
            <div className='text-2xl font-semibold'>{counter}</div>
        </div>
    )
}

export default Return;