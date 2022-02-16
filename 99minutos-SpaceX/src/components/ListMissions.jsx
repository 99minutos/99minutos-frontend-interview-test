import React from 'react'
import styles from '../styles/ListMissions.module.css';
import ListLogo from '../images/ListLogo.png'

const ListMissions = ({mission, setSelectedMission}) => {


  return (
    <div className={`${styles.bodyColor} col-12`}>
            {mission.map( item => 
                <div 
                    className={`${styles.CardMission} row border m-4 p-0`}
                    key={item.mission}  
                    onClick={() => setSelectedMission(item)}
                    >
                        <div className='col-3  col-sm-3 col-xl-3 align-self-center'>
                            <img className={styles.image} src={ListLogo} alt='Logo'/>
                        </div>
                        <div className={`${styles.iconName} col-9 col-sm-8 col-xl-9 align-self-start`}>
                            <h2>{item.mission_name} </h2> 
                            <p className={styles.textList}>{item.launch_site.site_name_long} </p>
                        </div>
                        <div className={styles.missionDate}>
                            <p className='p-1 m-0'>{item.launch_date_local}</p>
                        </div>
            </div>)}
    </div>
  )
}

export default ListMissions