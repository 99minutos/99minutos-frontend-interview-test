import React from 'react';
import Item from '../Item/Item';
import './missions.css';

const Missions = (props) => {
    // const  handleAddMission= (dataMission) => {
    //     props.setMission({...props.mission, theMission:[...props.mission.theMission, dataMission]})
    // }

    return (
        <section className='containerMissions'>
            <div className='titleMissions'>
                <h2>Last Launches</h2>
            </div>
            <div className='containerItems' >
                {props.spaceLand.map((oneMission, id)=><Item oneMission={oneMission} key={id} handleAddMission={props.handleAddMission} />)}
            </div>
        </section>
    )
};

export default Missions;