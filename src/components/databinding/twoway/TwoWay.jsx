import React, { useState } from 'react'

const TwoWay = () => {


    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    console.log("Component rerender due to state change")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        console.log(input)
    }

    return (

        <form onSubmit={handleSubmit} className='p-3.5 w-md mx-auto flex flex-col gap-2.5'>
            <input type="text" placeholder="First name" name='firstName' value={input.firstName} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="text" placeholder="Last name" name='lastName' value={input.lastName} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="email" placeholder="Email" name='email' value={input.email} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="password" placeholder="Password" name='password' value={input.password} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <button type='submit' className='px-4 py-2 rounded bg-blue-500 text-white cursor-pointer'>Create</button>
        </form>
    )
}

export default TwoWay;