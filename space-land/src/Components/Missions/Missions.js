import React from 'react';
import Item from '../Item/Item';
import './missions.css';

const Missions = (props) => {
    return (
        <section className='containerMissions'>
            <div className='titleMissions'>
                <h2>Last Launches</h2>
            </div>
            <div className='containerItems'>
                {props.spaceLand.map((data, id)=><Item data={data} key={id}/>)}
            </div>
        </section>
    )
};

export default Missions;