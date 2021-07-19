import React from 'react';
import Rocket from '../../assets/rocket.png'
import './item.css';

const Item = (props) => {
    console.group('data');
    const titleMission = props.item.mission_name;
    console.log(titleMission);
    const subtitleMission = props.item.launch_date_local;
    console.log(subtitleMission);
    const date = props.item.launch_site.site_name_long;
    console.log(date);
    console.groupEnd();
    return(
        <div className='containerItem'>
            <div className='imgItem'>
                <img src={Rocket} alt="Rocket" />
            </div>
            <div className='textItem'>
                <h3>{titleMission}</h3>
                <p>{subtitleMission}</p>
                <p>{date}</p> 
            </div>
        </div>
    )
};

export default Item;