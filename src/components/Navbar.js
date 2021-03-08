import  Dropdown  from './Dropdown'
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { gql } from '@apollo/client';
import client from '../services/index';
import query from '../services/queries'


const Navbar = () => {
    const [nav, setNav]= useState(false)
    const [mission, setMission]= useState(null)

    // generate random number from mission 100 to 108
    useEffect(() => {
    var id= Math.floor(Math.random() * (108 - 100) + 100).toString()
        client
        .query({
            query: gql` ${query}`
        }).then(response => {
            let data= response.data.launchesPast
            // we generate a random id and use filter to get a random mission
            let random= data.filter(number=> number.id===id)
            setMission(random[0])
        }  
            )
        .catch(err => console.log(err));
        
    }, [])


    

    return (
        <>
        <nav className='bg-gray-800	flex justify-between items-center h-16 bg-white text-white w-screen fixed top-0 z-10'>
                
            {/* logo */}
                <Link to='/' className='pl-14'>
                    <img src='../../short-logo.png' alt='Spacex logo' className='w-20'/>
                </Link>

            {/* open menu */}
            <div className='pr-8 md:block hidden flex flex-row text-center'>
                <Link to='/' className='p-4 text-white hover:bg-gray-300 hover:text-gray-800'> Dashboard</Link>
                
                {/* we send the all data of the random mission through props  */}
                {mission? 
                    <Link to={{pathname:`/mission/${mission.id}`, state: {mission}}} className='p-4 text-white hover:bg-gray-300 hover:text-gray-800'> 
                        Random launch
                    </Link>
                    :<></>
                }
                    <a href='http://www.spacex.com' target="_blank" rel="noreferrer" className='p-4 text-white hover:bg-gray-300 hover:text-gray-800'>
                        SpaceX.com
                    </a>
            </div>
            
            {/* burger menu */}
            <div className='text-white px-4 cursor-pointer md:hidden' onClick={()=>setNav(!nav)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" 
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
        </nav>
            
            {/* dropdown */}
            {nav? <Dropdown/>: <></>}
        </>
    )
}

export default Navbar
