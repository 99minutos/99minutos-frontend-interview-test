import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <div className=' md:hidden  grid grid-rows-4 text-center items-center bg-gray-800 '>
            <Link to='/' className='text-white hover:bg-gray-600 py-3'> Home </Link>
            <Link to='/dash' className=' text-white hover:bg-gray-600 py-3'> All launches </Link>
            <Link className='text-white hover:bg-gray-600 py-3'> Random </Link>
            <Link to='/' className=' text-white hover:bg-gray-600 py-3'> Spacex.com </Link>
        </div>
    )
}

export default Dropdown
