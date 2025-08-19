import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return (

        <div>
            <div className='flex justify-center items-center flex-wrap gap-7 bg-gray-500 p-5 text-3xl text-white'>
                <Link to="/useeffect">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>useEffect</button>
                </Link>
                <Link to="/useref">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>useRef</button>
                </Link>
                <Link to="/usestate">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>useState</button>
                </Link>
                <Link to="/return">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>return</button>
                </Link>
                <Link to="/hooksexample">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>useRefeffctState</button>
                </Link>
                <Link to="/usememo">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>useMemo</button>
                </Link>
                <Link to="/formdata">
                    <button className='border rounded-2xl px-3.5 py-1.5 bg-blue-500 cursor-pointer'>Formik</button>
                </Link>

            </div>
        </div>
    )
}

export default Header;