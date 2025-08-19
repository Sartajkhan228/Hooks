import React, { useEffect, useState } from 'react'

const UseState = () => {

    const [input, setInput] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: "",
        city: "",
        number: 0,
    })

    const handleChange = (e) => {

        const { name, value, type } = e.target;

        setInput((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("input data", input)
        console.log("input data", input.number)
        console.log("inputtype data", typeof input.number)
        try {

            const response = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            })

            if (!response.ok) {
                console.log('Error posting data')
            }

            const data = await response.json()
            console.log("Data posted successuly", data)

        } catch (error) {
            console.log('Error fetching data')
        }

        // setInput({

        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     password: "",
        //     dob: "",
        //     city: "",
        //     number: 0,
        // })


    }

    useEffect(() => {
        console.log(input)
    }, [input])

    return (

        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
            <input type="text" placeholder="First name" name='firstName' value={input.firstName} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="text" placeholder="Last name" name='lastName' value={input.lastName} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="email" placeholder="Email" name='email' value={input.email} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="password" placeholder="Password" name='password' value={input.password} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="date" placeholder="Date of birth" name='dob' value={input.dob} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="text" placeholder="City" name='city' value={input.city} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <input type="number" placeholder="Number" name='number' value={input.number} onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />

            <button className='px-3 py-1.5 bg-blue-500 cursor-pointer text-white font-semibold rounded hover:bg-blue-700 transition-all duration-300 ease-in-out'>Submit</button>
        </form>

    )
}

export default UseState;