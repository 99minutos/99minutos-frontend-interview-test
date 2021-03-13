import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { gql } from '@apollo/client';
import client from '../services/index';
import query from '../services/queries'

const Dropdown = () => {
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
        // drowpdow only is visible in smaller screens
        <div className=' md:hidden  grid grid-rows-3 text-center items-center bg-gray-800 fixed  top-0 mt-14 w-screen z-10'>
            <Link to='/' className=' text-white hover:bg-gray-300 py-3 hover:text-gray-800'> All launches </Link>
            {mission? 
                /* we send the all data of the random mission through props  */
                <Link to={{pathname:`/mission/${mission.id}`, state: {mission}}} className='text-white hover:bg-gray-300 py-3 hover:text-gray-800'> 
                    Random launch
                </Link>
            : <></>}
            <a href='http://www.spacex.com' target="_blank" rel="noreferrer" className=' text-white hover:bg-gray-300 py-3 hover:text-gray-800'>SpaceX.com</a>
        </div>
    )
}

export default Dropdown
