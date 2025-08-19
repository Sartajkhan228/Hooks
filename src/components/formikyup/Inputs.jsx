import React from 'react'
import { useField, useFormikContext } from 'formik';

const Inputs = ({ label, options = [], ...props }) => {

    const [field, meta] = useField(props);
    const { setFieldValue } = useFormikContext()

    let inputElement;

    if (props.type === 'textarea') {
        inputElement = <textarea
            {...field}
            {...props}
            className={`border p-3 text-sm rounded w-full ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}
        />
    } else if (props.type === 'select') {
        inputElement = (
            <select
                {...field}
                {...props}
                className={`border p-2 rounded w-full ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}
            >
                <option value="">select an option</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        )
    } else if (props.type === 'checkbox') {
        inputElement = (
            <input
                type='checkbox'
                {...field}
                {...props}
                checked={field.value}
                className={`mr-65 cursor-pointer md:mr-120 ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}

            />
        )
    } else if (props.type === "file") {
        inputElement = (
            <input
                type='file'
                onChange={(event) => {

                    setFieldValue(field.name, event.currentTarget.files[0])
                }}
                className={`border p-2 rounded w-40 text-xs ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}

            />
        )
    } else {
        inputElement = <input
            {...field}
            {...props}
            className={`border p-2 rounded ${meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'}`}
        />
    }

    return (

        <div className='flex flex-col mb-4' >
            {props.type !== "checkbox" && (
                <label className="mb-1 text-xs font-semibold">{label}</label>
            )}
            {inputElement}
            {meta.touched && meta.error ? (
                <span className='text-red-500 text-xs'>{meta.error}</span>
            ) : null}
        </div>
    )
}

export default Inputs;

