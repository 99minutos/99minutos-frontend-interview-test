import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addSelection } from '../../../redux/actions/launch';

import './LaunchCard.css';

const LaunchCard = ({ mission_name, launch_date_local, launch_site }) => {
  const state = useSelector((state) => state.launchReducer.selected);
  const dispatch = useDispatch();
  const replaceDate = new Date(launch_date_local);

  const handleMission = (missionName) => {
    dispatch(addSelection(missionName));
  };
  return (
    <>
      {mission_name === state[0]?.mission_name ? (
        <div
          className='launchCardContainerSelected'
          onClick={() => handleMission(mission_name)}
        >
          <div className='rocketSelected' />
          <div className='rocketSelected' />
          <div className='missionNameSelected'>{mission_name}</div>
          <div className='launchSiteSelected'>{launch_site.site_name_long}</div>
          <div className='missionDateSelected'>
            {replaceDate.toLocaleDateString('en-US')}
          </div>
        </div>
      ) : (
        <div
          className='launchCardContainer'
          onClick={() => handleMission(mission_name)}
        >
          <div className='rocket' />
          <div className='missionName'>{mission_name}</div>
          <div className='launchSite'>{launch_site.site_name_long}</div>
          <div className='missionDate'>
            {replaceDate.toLocaleDateString('en-US')}
          </div>
        </div>
      )}
    </>
  );
};

export default LaunchCard;
