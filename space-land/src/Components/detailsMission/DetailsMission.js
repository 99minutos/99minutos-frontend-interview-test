import React from 'react';
import './detailsMission.css';

const DetailsMission = (props) => {
    // const handleAddLink = () => {
    //     const link = props.item.links.video_link;
    //     return link;
    // }

    return (
        <>
            <div className='imageMission'>
                <img src={props.item.ships[0].image} alt="Mission" />
            </div>
            <div className='contentStoryMission'>
                <h2>{props.item.mission_name}</h2>
                <p>{props.item.details}</p>
                <button><a
                    href={props.item.links.video_link}
                    target="_blank"
                    rel="noreferrer"
                >
                See More
                </a></button>
            </div>
        </>
    )
};

export default DetailsMission;
