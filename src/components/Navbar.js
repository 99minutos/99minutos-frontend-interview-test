import  Dropdown  from './Dropdown'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav]= useState(false)
    return (
        <>
        <nav className='bg-gray-800	flex justify-between items-center h-16 bg-white text-white'>
                
            {/* logo */}
                <Link to='/' className='pl-14'>
                    <img src='../../short-logo.png' alt='Spacex logo' className='w-20'/>
                </Link>

            {/* open menu */}
            <div className='pr-8 md:block hidden flex flex-row '>
                <Link to='/' className='p-4 text-white'> Home </Link>
                <Link to='/dash' className='p-4 text-white'> All launches </Link>
                <Link className='p-4 text-white'> Random </Link>
                <Link to='/' className='p-4 text-white'> Spacex.com </Link>
            </div>
            
            {/* burger menu */}
            <div className='text-white px-4 cursor-pointer md:hidden' onClick={()=>setNav(!nav)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>

            {/* dropdown */}
        </nav>
            {nav? <Dropdown/>: <></>}
        </>
    )
}

export default Navbar
