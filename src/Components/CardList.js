import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import Rocket from '../Resources/rocket.png'
import TOP_TEN_MISSIONS from '../graphql/getTopTenMissions.graphql'
import Mission from './Mission'
import { CircularProgress } from '@mui/material'
import Presentation from './Presentation'


const CardList = () => {
  const { data, error, loading } = useQuery(TOP_TEN_MISSIONS);
  const [showMission, setShowMission] = useState(false)
  const [missionInfo, setMissionInfo] = useState([])

  if (loading) return <CircularProgress />
  if (error) return <p>Error :(</p>;

  const handleClick = (e, mission) => {
    setShowMission(true);
    setMissionInfo(mission);
  }

  const hiddenArticle = () => {
    setShowMission(false);
  }

  return (

    <>
      <section>
        <h1>Last Launches</h1>
        {
          data.launchesPast.map((mission) => (

            mission.mission_name ? (

              <div className='cardItem' key={mission.id}>
                <button className='btnMission' onClick={(e) => handleClick(e, mission)}>
                  <img src={Rocket} alt='rocket icon' height='40px' />
                  <div>
                    <h3>{mission.mission_name}</h3>
                    <p>{mission.launch_site.site_name_long}</p>
                    <p id='date'>{(mission.launch_date_local).slice(0, 10)}</p>
                  </div>

                </button>
              </div>) : (
              <div className='cardItem'>
                <button className='btnMission'>
                  <img src={Rocket} alt='rocket icon' height='40px' />
                  <div>
                    <h3>We're working on this mission, yet! 🚀</h3>
                  </div>
                </button>
              </div>
            )
          ))
        }
      </section>
      {
        showMission ? <Mission data={missionInfo} hiddenArticle={hiddenArticle} /> : <Presentation />
      }
    </>
  )
}

export default CardList;