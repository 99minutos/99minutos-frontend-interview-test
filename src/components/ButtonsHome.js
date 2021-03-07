import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { gql } from '@apollo/client';
import client from '../services/index';
import query from '../services/queries'

const ButtonsHome = () => {
    const [mission, setMission]= useState(null)

    // generate random number from mission 100 to 108
    useEffect(() => {
        var id= Math.floor(Math.random() * (108 - 100) + 100).toString()
            client
            .query({
                query: gql` ${query}`
            }).then(response => {
                let data= response.data.launchesPast
                let random= data.filter(number=> number.id===id)
                setMission(random[0])}  
                )
            .catch(err => console.log(err));
            
        }, [])


    return (
        <div className='flex flex-row h-screen justify-center items-center mt-40'>
            <Link to='/dash' className='py-4 px-9 bg-yellow-400 text-white rounded text-lg m-3 hover:bg-yellow-500 hover:text-white'>
                All launches
            </Link>

            {mission? <Link  to={{pathname:`/mission/${mission.id}`, state: {mission}}} className='py-4 px-9 bg-yellow-400 text-white rounded text-lg m-3 hover:bg-yellow-500 hover:text-white'>
                Random launch
            </Link>
            :<></>}
        </div>
    )
}

export default ButtonsHome
