import React, { useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dob: "",
        city: "",
        number: 0,
    })

    const inputFileRef = useRef(null)
    const imageRef = useRef(null)

    console.log(inputRef)

    const setRef = (name) => (el) => {
        inputRef.current[name] = el
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const inputData = {

            firstName: inputRef.current.firstName.value,
            lastName: inputRef.current.lastName.value,
            email: inputRef.current.email.value,
            password: inputRef.current.password.value,
            dob: inputRef.current.dob.value,
            city: inputRef.current.city.value,
            number: Number(inputRef.current.number.value)
        }


        try {

            const response = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputData)
            })

            if (!response.ok) {
                console.log('Error posting data')
            }

            const data = await response.json()
            console.log("Data posted successuly", data)

        } catch (error) {
            console.log('Error fetching data')
        }

        e.target.reset()

    }

    const handleUpload = () => {
        inputFileRef.current.click()
    }



    return (

        <div>
            <div>
                <img ref={imageRef} src="/vite.svg" alt="" onClick={handleUpload} className='cursor-pointer' />
                <input className='hidden' ref={inputFileRef} type="file" />
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg space-y-5 border border-gray-200"
            >
                <h2 className="text-2xl font-bold text-center text-purple-800">useRef</h2>

                <input
                    type="text"
                    placeholder="First name"
                    ref={setRef("firstName")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Last name"
                    ref={setRef("lastName")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    ref={setRef("email")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    ref={setRef("password")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="date"
                    placeholder="Date of birth"
                    ref={setRef("dob")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="text"
                    placeholder="City"
                    ref={setRef("city")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <input
                    type="number"
                    placeholder="Number"
                    ref={setRef("number")}
                    className="w-full px-4 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                />

                <button
                    className="w-full py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-all duration-300"
                >
                    Submit
                </button>

            </form>
        </div>


    )
}

export default UseRef;