
import React from 'react'
import { Form, Formik } from 'formik';
import Inputs from './Inputs';
import { userSchema } from '../../validations/userschema';
import { toast } from 'react-toastify';

const FormData = () => {


    const selectOptions = [

        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'India', label: 'India' },
        { value: 'USA', label: 'USA' },
    ]


    return (

        <div className='w-full md:max-w-[70%] mx-auto p-6 bg-white shadow rounded'>
            <h2 className='text-xl font-bold mb-4'>User Registration</h2>

            <Formik

                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    city: "",
                    age: "",
                    phoneNumber: "",
                    date: "",
                    select: "",
                    description: "",
                    terms: false,
                    profilePicture: null

                }}

                validationSchema={userSchema}

                onSubmit={async (values, { setSubmitting }) => {

                    try {
                        const response = await fetch("http://localhost:5000/users", {
                            method: "POST",
                            headers: { 'Content-Type': "application/json" },
                            body: JSON.stringify(values)
                        })

                        if (!response.ok) {
                            console.log("Error responding data")
                        }

                        const data = await response.json()
                        toast.success("Form submitted")
                        console.log("Form submitted", data)

                    } catch (error) {
                        console.log("Error posting data", error)
                    }
                    console.log("form submitted", values)
                }}

            >

                {({ isSubmitting, values }) => (

                    <Form>
                        <Inputs name="firstName" type="text" label="First Name" />
                        <Inputs name="lastName" type="text" label="Last Name" />
                        <Inputs name="email" type="email" label="Email" />
                        <Inputs name="password" type="password" label="Password" />
                        <Inputs name="confirmPassword" type="password" label="Confirm Password" />
                        <Inputs name="city" type="text" label="City" />
                        <Inputs name="age" type="number" label="Age" />
                        <Inputs name="phoneNumber" type="number" label="Phone Number" />
                        <Inputs name="date" type="date" label="Date" />
                        <Inputs name="select" type="select" label="Select an option" options={selectOptions} />

                        <Inputs name="profilePicture" type="file" label="Upload profile picture" />

                        {values.profilePicture && (
                            <div className='mb-4 w-32 h-32'>
                                <img src={URL.createObjectURL(values.profilePicture)}
                                    alt="Preview"
                                    className='w-full h-full object-cover rounded border border-gray-300'
                                />
                            </div>
                        )}

                        <Inputs name="description" type="textarea" label="Description" />
                        <Inputs name="terms" type="checkbox" label="I agree to the terms" />


                        <button
                            type='submit'
                            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 duration-300 
                            ease-in-out cursor-pointer'
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}

                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default FormData;