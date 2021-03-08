import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '../services/index';
import { Link } from 'react-router-dom'
import query from '../services/queries'
import { parseISO, format } from 'date-fns'
import Navbar from '../components/Navbar';



const Dashboard = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {                       
        client
        .query({
            query: gql` ${query}`
        }).then(response => {
            // mission contains all launches data 
            setMissions(response.data.launchesPast)}  
            )
        .catch(err => console.log(err));
    }, []);


    return (
        <div>
            <Navbar/>
            {/* // simple header with spaceX logo */}
            <section className='w-full h-72 bg-gray-800 shadow-lg flex justify-center items-center flex flex-col'>
                <img src='https://cdn.freebiesupply.com/logos/large/2x/spacex-logo-black-and-white.png' alt="Spacex Logo" className='max-h-20 pl-20 sm:pl-32 mt-10'/>
                <h1 className='text-center text-3xl mt-12 text-white text-xs'>Last Launches</h1>
            </section>

            {/* section past launches */}
            <section className='flex flex-row flex-wrap w-full align-center justify-center '>
                {missions?.map(mission => 
                    <div className='w-80 bg-white px-10 py-5 m-10 h-96 shadow-lg'>
                            
                            {/* blue ribbon: image and title */}
                        <section className='bg-blue-900 flex flex-row items-center  text-md  relative h-16 max-h-80 w-80 right-12 my-3 shadow-xl'>
                            {mission.links && mission.links.flickr_images.length !== 0?       
                                /* uses first image or 'not available' */
                                <img src={mission.links.flickr_images[1]} alt={mission.mission_name} className='w-24 h-24 ml-4 rounded-full shadow-lg'/>
                                :
                                <img   src='http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png' alt={mission.mission_name} className='w-24 h-24 ml-4 rounded-full shadow-lg'/>
                            } 

                                {/* /* uses first image or 'not available' */}
                                <h3 className='text-white ml-8 text-center pr-4'><b>{mission.mission_name}</b></h3>
                        </section>

                            {/* details section */}
                            {mission.details ?
                                <div className='mt-10 h-52'>
                                    <span> {mission.details.slice(0, 250)}</span> 
                                    {/* we send the all data ofthe mission through props  */}
                                    <Link to={{pathname:`mission/${mission.id}`,  state: { mission}}} key={mission.id}>
                                        <span className='text-yellow-500'> ...see more</span>
                                    </Link> 
                                </div> 
                                :
                                <h2 className='mt-6 h-52 text-2xl text-center'>No details available</h2>}

                            {/* launch date */}
                            <div><em className='relative left-44'>{format(parseISO(mission.launch_date_local), "dd/mm/yyyy")}</em></div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default Dashboard
