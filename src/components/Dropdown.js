import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = () => {
    return (
        <div className=' md:hidden  grid grid-rows-4 text-center items-center bg-gray-800 fixed  mt-14 w-screen z-10'>
            <Link to='/' className='text-white hover:bg-gray-300 py-3 hover:text-gray-800'> Home </Link>
            <Link to='/dash' className=' text-white hover:bg-gray-300 py-3 hover:text-gray-800'> All launches </Link>
            <Link className='text-white hover:bg-gray-300 py-3 hover:text-gray-800'> Random </Link>
            <a href='http://www.spacex.com' target="_blank" className=' text-white hover:bg-gray-300 py-3 hover:text-gray-800'>SpaceX.com</a>
        </div>
    )
}

export default Dropdown
