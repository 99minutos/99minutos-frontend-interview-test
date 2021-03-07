import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Navbar from '../components/Navbar'
import { parseISO, format } from 'date-fns'

const Mission = (props) => {
    const [mission, setMission] = useState([]);
    const [date, setDate] = useState([]);
    let data= props.location.state.mission

    useEffect(() => {                   
        setMission(data)
        setDate(format(parseISO(props.location.state.mission.launch_date_local), "dd/mm/yyyy"));
    }, []);
    
    return (
        <div>
         <Navbar/>
            <div className='flex flex-wrap justify-center shadow-lg bg-white mt-36 m-auto w-96 min-w-min md:w-auto md:max-w-max '>

                {/* picture carousel */}
                <div className='p-4  md:p-14 '>    
                    {mission.links && mission.links.flickr_images.length !== 0?  
                        <Carousel autoplay className='w-96 h-96 bg-white sm:bg-transparent'>
                                {mission.links.flickr_images.map((img, i) => 
                                        <img src={img} alt={mission.mission_name} className='w-96 h-96 object-fill'/>)}  
                        </Carousel>
                        :
                        <img src='http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png' alt={mission.mission_name} className='w-96 h-96'/>
                    }
                </div>

                {/* info  card */}
                <div className='p-10 w-96'>
                    {/* name and date */}
                    <h2 className='text-center text-xl m-0 md:text-2xl'>{mission.mission_name}</h2>
                    <p className='text-center'><b>{date}</b></p>           
                    {/* mission details */}
                    <p>{mission.details}</p>
                        <h3>Launch Site:</h3>
                        {mission.launch_site? <p>{mission.launch_site.site_name_long}</p>: <p>No site name available </p>}
                        
                        {/* button section */}
                        <div className='flex justify-around flex-col sm:flex-row'>
                            {mission.links && mission.links.video_link? 
                                <a href={mission.links.video_link} target="_blank" className=' flex items-center justify-center py-2 px-8 my-2 border-2 border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-white'>Video</a>
                                :
                                <div className='flex items-center justify-center py-2 px-8 my-2 border-2 border-gray-200  bg-gray-100 rounded-lg text-gray-300'>Video</div>
                            }
                            {mission.links && mission.links.article_link?  
                                <a href={mission.links.article_link} target="_blank"> <div className='flex items-center justify-center my-2 py-2 px-8 border-2 border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-white'>Article</div> </a>
                                :
                                <div className='flex items-center justify-center py-2 px-8 my-2 border-2 border-gray-200 bg-gray-100 rounded-lg text-gray-300'>Article</div>
                            }
                        </div>
                </div>   
            </div>           
    </div>


    )
}

export default Mission
