import React, { useEffect, useState } from 'react';
import Missions from '../../Components/Missions/Missions';
import StoryMission from '../../Components/StoryMission/StoryMission';
import FerchGetPost from '../../lib/api'
import './dashboardSpaceLand.css';

const DashboardSpaceLand = () => {
    const [spaceLand, setSpaceLand] = useState([]);
    const [mission, setMission] = useState({
            theMission:[],
        })

    const handleAddMission = (storyMission) => {
        setMission({...mission, theMission:[ storyMission]});
    }

    const ApiData = async () => {
        const res = await FerchGetPost();
        setSpaceLand(res.data.launchesPast);
    };

    useEffect(() => {
        ApiData();
    }, []);
    
    return (
        <section className='containerDashboardSpaceLand'>
            <section className='missions'>
                <Missions 
                spaceLand={spaceLand} 
                mission={mission} 
                setMission={setMission} 
                handleAddMission={handleAddMission}
                />
            </section>
            <section className='containerMission'>
                <StoryMission mission={mission} />
            </section> 
        </section>
    )
};

export default DashboardSpaceLand;