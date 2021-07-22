import React from 'react';
import Pictures from '../Pictures/Pictures';
import './detailsMission.css';

const DetailsMission = (props) => {
    return(
        <>
            <Pictures item ={props.item}/>
            <div className='contentStoryMission'>
                <h2>{props.item.mission_name}</h2>
                <p>{props.item.details}</p>
                <button><a href={props.item.links.video_link}>
                See More
                </a></button>
            </div>
        </>
    )    
};

export default DetailsMission;
