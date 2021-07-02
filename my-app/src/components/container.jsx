import React, { useState, useEffect } from 'react';
import {useQuery, gql} from '@apollo/client'
import { LOAD_DATA } from '../GraphQl/Queries';
import Panel from './panel';
import data from './data/data.json'

const Container = () => {
    
   /* const {error, loading, data} = useQuery(LOAD_DATA)

    useEffect(()=>
    {
        console.log(data)
    }, [data])
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
*/
    
    const [currentLaunch, setCurrentLaunch] = useState()

    useEffect(()=>{
        setData()
    },[])

    const ChangeData = (dat) =>{
        setCurrentLaunch(dat)
        console.log()
    }
    const setData = () =>{       
        setCurrentLaunch(data[0])
        
    }   
    return ( 
        <div className="Container">
            <Panel data = {data} change = {ChangeData}/>
            <div className="Content">
            {
                !!currentLaunch ? (
                    <>
                        <img src={currentLaunch.ships.length > 0 ? currentLaunch.ships[0].image : ''}/> 
                    </>   
                ) : <></>
            }       
            </div>
            <div className="TextContainer">
           { 
                !!currentLaunch?(
                    <>
                        <h2>{currentLaunch.mission_name}</h2>
                        <p>{currentLaunch.launch_site.site_name_long}</p>
                        <a href={currentLaunch.links.video_link}>See More</a>
                    </>
                ): <></>
            }
            </div>
        </div> 
    );
}
 
export default Container;