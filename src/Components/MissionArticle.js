import React from 'react';
import defaultImage from '../Resources/defaultImage.jpg'


const MissionArticle = ({data, hiddenArticle}) => {
    let { mission_name, details, links } = data;
    
    return(
        <article id='missionArticle'>
        {
            <>
                {
                    links.flickr_images.length === 0 ? (
                        <div><img src={defaultImage} alt={mission_name} /></div>
                    ) : (
                        <div><img src={links.flickr_images[0]} alt={mission_name} /></div>
                    )
                }
                    <h2>{mission_name}</h2>
                {
                    details ? (
                        <p>{details}</p>
                    ) : (
                        <p>We're working on it🛠</p>
                    )
                }
                {
                                    
                    links.article_link ? (
                        <a href={links.article_link} target='_blank'><button>SEE MORE</button></a>
                    ) : (
                        <a href={links.video_kink} target='_blank'><button>SEE MORE</button></a>
                    )
                }
            </>
        }
            <button className='lineButton' onClick={() => hiddenArticle()}>BACK</button>
        </article>
    )
}

export default MissionArticle;