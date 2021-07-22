import React from 'react';
import DetailsMission from '../../Components/detailsMission/DetailsMission';
import './storyMission.css';

const StoryMission = (props) => {
    const data =props.mission.theMission;
    return (
        <div className='containerStoryMission'>
            {data.map((item)=>
            <DetailsMission item={item} id={props.id} mission={props.mission}/>
            )}
        </div>
    )
};

export default StoryMission;