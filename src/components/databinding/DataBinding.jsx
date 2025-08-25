import React from 'react'
import { Link } from 'react-router-dom'

const DataBinding = () => {

    return (

        <div className='flex gap-2.5 w-max mx-auto p-8'>
            <Link to="/oneway">
                <button className='px-4 py-2 bg-blue-500 text-white rounded cursor-pointer'>One Way</button>
            </Link>
            <Link to="/twoway">
                <button className='px-4 py-2 bg-blue-500 text-white rounded cursor-pointer'>Two Way</button>
            </Link>
        </div>
    )
}

export default DataBinding