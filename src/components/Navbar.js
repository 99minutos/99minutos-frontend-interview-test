import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-gray-800	flex justify-between items-center h-16 bg-white text-white'>
                
            {/* logo */}
                <Link to='/' className='pl-8'>
                    <img src='' alt='Spacex logo' />
                </Link>

            {/* open menu */}
            <div className='pr-8 md:block hidden flex flex-row'>
                <Link to='/' className='p-4'> Home </Link>
                <Link to='/dash' className='p-4'> All launches </Link>
                <Link className='p-4'> Random </Link>
                <Link to='/' className='p-4'> Spacex.com </Link>
            </div>
            
            {/* burger menu */}
            <div className='text-white px-4 cursor-pointer md:hidden'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </nav>
    )
}

export default Navbar
