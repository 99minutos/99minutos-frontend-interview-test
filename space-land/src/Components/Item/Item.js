import React from 'react';
import Rocket from '../../assets/rocket.png'
import './item.css';

const Item = (props) => {
    const {mission_name, launch_date_local, launch_site} = props.oneMission;
    const text = launch_site.site_name_long;
    const originalDdate = new Date (launch_date_local);
    const date = originalDdate.toLocaleDateString('en-US');

    return(
        <div className='containerItem' onClick={()=>(props.handleAddMission(props.oneMission))}>
            <div className='imgItem'>
                <img src={Rocket} alt="Rocket" />
            </div>
            <div className='textItem'>
                <h3>{mission_name}</h3>
                <p>{text}</p>
                <p className='dateItem'>{date}</p> 
            </div>
        </div>
    )
};

export default Item;