import React, { useEffect, useState } from 'react'

const Child = ({ count }) => {

    const [data, setData] = useState([])

    console.log("Its not running due to React Compiler")

    const getProducts = async () => {


        try {

            const response = await fetch('https://fakestoreapi.com/products')

            if (!response.ok) {
                throw new Error("Error getting data");
            }

            const productData = await response.json()

            setData(productData)

        } catch (error) {
            console.log("Error getting data")
        }
    }


    useEffect(() => {
        getProducts()
    }, [])

    return (

        <div className='mt-7'>
            <h1>{count}</h1>
            {
                data.map((item) => (
                    <div key={item.id} className='border w-[300px] p-8 text-center'>

                        <h3>{item.title}</h3>
                        <li>
                            {item.description}
                        </li>
                    </div>
                ))
            }

        </div>
    )
}

export default Child;