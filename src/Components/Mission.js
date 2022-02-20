import React from 'react';

const Mission = ({ data }) => {
    console.log('mission: ' + data)
    let { mission_name, article_link, video_link, description, image } = data;

    return (
        <article id='missionArticle'>
            <div><img src={image} alt={mission_name} /></div>
            <h2>{mission_name}</h2>
            <p>{description}</p>
            <a><button>SEE MORE</button></a>
        </article>
    )
}

export default Mission