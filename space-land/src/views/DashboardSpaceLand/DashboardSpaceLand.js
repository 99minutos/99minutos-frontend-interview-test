import React, { useEffect, useState } from 'react';
import Missions from '../../Components/Missions/Missions';
import ImageMission from '../../Components/ImageMission/ImageMission';
import StoryMission from '../../Components/StoryMission/StoryMission';
import FerchGetPost from '../../lib/api'
import './dashboardSpaceLand.css';

const DashboardSpaceLand = () => {
    const [spaceLand, setSpaceLand] = useState([]);

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
                <Missions spaceLand={spaceLand}/>
            </section>
            <section className='containerMission'>
                <ImageMission spaceLand={spaceLand}/>
                <StoryMission spaceLand={spaceLand}/>
                <button>See More</button>
            </section> 
        </section>
    )
};

export default DashboardSpaceLand;