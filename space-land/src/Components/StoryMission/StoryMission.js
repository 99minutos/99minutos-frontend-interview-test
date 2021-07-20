import React from 'react';
import './storyMission.css';

const StoryMission = ({spaceLand}) => {
    const titleMission = spaceLand.mission_name;
    const detailsMission = spaceLand.details;
    return (
        <div>
            <h2>{titleMission}</h2>
            <p>{detailsMission}</p>
        </div>
    )
};

export default StoryMission;