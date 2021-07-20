import React from 'react';
import Rocket from '../../assets/rocket.png'
import './item.css';
// import Moment from 'moment';

const Item = ({data}) => {
    const titleMission = data.mission_name;
    const subtitleMission = data.launch_site.site_name_long;
    const originalDdate = new Date (data.launch_date_local);
    const date = originalDdate.toLocaleDateString('en-US');

    return(
        <div className='containerItem'>
            <div className='imgItem'>
                <img src={Rocket} alt="Rocket" />
            </div>
            <div className='textItem'>
                <h3>{titleMission}</h3>
                <p>{subtitleMission}</p>
                <p className='dateItem'>{date}</p>
                 
            </div>
        </div>
    )
};

export default Item;