import React, { useMemo, useState } from 'react'
import Child from './Child'

const Memo = () => {

    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)




    const expensiveCalculation = (num) => {
        console.log('Expensive calculation is running...')
        for (let i = 0; i < 1000; i++) {
            console.log("loop")
        }
        return num * 2
    }

    // const doubled = useMemo(() => expensiveCalculation(count), [count])
    const doubled = expensiveCalculation(count)

    return (

        <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }} className='p-9' >
            <h2>Doubled : {doubled}</h2>
            <br />
            <br />
            <div className='flex items-center gap-3'>
                <button onClick={() => setCount(count + 1)} className='px-2.5 py-1 rounded bg-blue-500 text-white cursor-pointer font-semibold hover:bg-blue-700 duration-300 ease-in-out'>Incremnt count</button>
                <button onClick={() => setDark(!dark)} className='px-2.5 py-1 rounded bg-blue-500 text-white cursor-pointer font-semibold hover:bg-blue-700 duration-300 ease-in-out'>Toggle theme</button>
            </div>


            <Child count={count} />
        </div>
    )
}

export default Memo;

