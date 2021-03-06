// List the last 10 missions
// Clicking on the card, goes to the Mission route


import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import client from '../services/index';
import { Link } from 'react-router-dom'
import query from '../services/queries'

const Dashboard = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {                       
        client
        .query({
            query: gql` ${query}`
        }).then(response => {
            setMissions(response.data.launchesPast)}  
            )
        .catch(err => console.log(err));
    }, []);
    


    return (
        <div>
                <img src="logo-spacex.png" alt="Spacex Logo" />
        <h1>Last Launches </h1>
        <div>
            {missions?.map(mission => 
                <div>
                    <Link to={{pathname:`mission/${mission.id}`,  state: { mission}}} key={mission.id}>
                        <h3>{mission.mission_name}</h3>
                        {mission.details ? <h2> {mission.details.slice(0, 190) + ' ...see more'}</h2> : <h2>'no hay detalles'</h2>}
                        <time><em>{mission.launch_date_local}</em></time>
                    </Link> 
                </div>
            )}
        </div>
    </div>
);
}

export default Dashboard
