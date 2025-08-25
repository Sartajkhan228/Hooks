import React from 'react'

const Child = ({ fruitName }) => {

    return (

        <div >
            <h1 className='flex justify-center font-bold text-7xl text-red-900'>{fruitName}</h1>

        </div>
    )
}

export default Child