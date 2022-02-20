import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Rocket from '../Resources/rocket.png'
import TOP_TEN_MISSIONS from '../graphql/getTopTenMissions.graphql'
import MissionArticle from './MissionArticle'
import { CircularProgress } from '@mui/material'
import Presentation from './Presentation'


const CardMission = () => {
  const { data, error, loading } = useQuery(TOP_TEN_MISSIONS);
  const [showMission, setShowMission] = useState(false)
  const [missionInfo, setMissionInfo] = useState([])
  const [articleSelected, setarticleSelected] = useState("missionCard")

  if (loading) return <CircularProgress />
  if (error) return <p>Error :(</p>;

  const handleClick = (mission,e) => {
    setShowMission(true);
    setMissionInfo(mission);
    setarticleSelected("missionCard clicked");
    console.log(e)
  }

  const hiddenArticle = () => {
    setShowMission(false);
    setarticleSelected(articleSelected)
  }


  return (

    <>
      <section>
        <h1>Last Launches</h1>
        {
          data.launchesPast.map((mission) => (

            mission.mission_name ? (
              <article key={mission.id} className={articleSelected? "missionCard clicked" : "missionCard"} onClick={() => handleClick(mission)} >
                <img src={Rocket} alt="rocket icon" height="40px" />
                <div>
                  <h3>{mission.mission_name}</h3>
                  <p>{mission.launch_site.site_name_long}</p>
                  <p id='date'>{mission.launch_date_local}</p>
                </div>
              </article>
            ) : (
              <article className={articleSelected ? "clicked" : "missionCard"}>
                <img src={Rocket} alt="rocket icon" height="40px" />
                <div>
                  <h3>We're working on this mission, yet! 🚀</h3>
                </div>
              </article>
            )
          ))
        }
      </section>
      {
        showMission ? <MissionArticle data={missionInfo} hiddenArticle={hiddenArticle}/> : <Presentation />
      }
    </>
  )
}

export default CardMission;