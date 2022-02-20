import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Rocket from '../Resources/rocket.png'
import TOP_TEN_MISSIONS from '../graphql/getTopTenMissions.graphql'
import MissionArticle from './MissionArticle'


const CardMission = ({ addArticle }) => {
  const { data, error, loading } = useQuery(TOP_TEN_MISSIONS);
  const [showMission, setShowMission] = useState(false)
  const [missionInfo, setMissionInfo] = useState([])
  const [articleSelected, setarticleSelected] = useState(false)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleClick = (mission) =>{
    setShowMission(true);
    setMissionInfo(mission);
    setarticleSelected(true)
  }

 
  return (
    <main>
      <section>
        {data.launchesPast.map((mission) => (
          <article key={mission.mission_name} className={articleSelected ? "missionCard selected" : "missionCard"} onClick={() => handleClick(mission)} >
            <img src={Rocket} alt="rocket icon" height="40px" />
            <div>
              <h3>{mission.mission_name}</h3>
              <p>{mission.launch_site.site_name_long}</p>
              <p id='date'>{mission.launch_date_local}</p>
            </div>
          </article>
        )).slice(0, 4)}
      </section>
      <article>
        {
          showMission ? <MissionArticle data={missionInfo} /> : "holaaaaaa"
        }
      </article>
    </main>
  )
}

export default CardMission;