import React, { useState } from 'react';


const MissionArticle = ({data}) => {
   
    let { mission_name, details, ships, links } = data;
    const [link, setLink] = useState("")

    const handleLink = () =>{
        if(links.article_link){
            setLink(links.article_link)
        }else{
            setLink(links.video_link)
        }
    }

    return(
        <article id='missionArticle'>
            <div><img src={image} alt={mission_name} /></div>
            <h2>{mission_name}</h2>
            <p>{details}</p>
            <a href={link} target='_blank'><button onClick={() => handleLink()}>SEE MORE</button></a>
        </article>
    )
}

export default MissionArticle;