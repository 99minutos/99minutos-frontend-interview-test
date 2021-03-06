// Details of the mission (image, etc...)
// Button to external link
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Mission = (props) => {
    const [mission, setMission] = useState([]);
    let data= props.location.state.mission

    useEffect(() => {                   
        setMission(data)
    }, []);
    
    return (
        <div>
            <div>    
                {mission.links && mission.links.flickr_images.length !== 0?  
                    <div>
                        {mission.links.flickr_images.map((img, i) => <img src={img} alt={mission.mission_name}/>)}            
                    </div>
                    :
                    <h2>No image available</h2>
                }
            </div>
            <div>
                <div>
                    <h2>{mission.mission_name}</h2>
                    <p>{mission.details}</p>
                    <h2>Launch Site</h2>
                    {mission.launch_site? <h3>{mission.launch_site.site_name_long}</h3>: <h3>NO site name </h3>}
                    <h2>Launch Date  </h2>   
                    <div>
                        {mission.links? 
                            <a  href={mission.links.video_link} target="_blank">Video</a>
                            :
                            <p>No videos found</p>

                        }
                        {mission.links?  
                            <a href={mission.links.article_link} target="_blank"> Article</a>
                            :
                            <p>No articles found</p>
                        }
                    </div>
                </div>       
            </div>

    </div>


    )
}

export default Mission
