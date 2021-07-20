import React from 'react';
import './imageMission.css';

const ImageMission = ({spaceLand}) => {
    const imageMission = spaceLand.ships;
    return (
        <div className='imageMission'>
            <img src={imageMission} alt="Mission" />
        </div>
    )
};

export default ImageMission;