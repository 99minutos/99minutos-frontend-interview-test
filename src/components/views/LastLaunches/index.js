import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

import LaunchCard from '../../common/LaunchCard';

import './LastLaunches.css';

const LastLaunches = () => {
  const [lastLaunches, setLastLaunches] = useState([]);

  const data = useSelector((state) => state.launchReducer.data);

  useEffect(() => {
    setLastLaunches(data);
    return () => {
      setLastLaunches([]);
    };
  }, []);

  return (
    <>
      <div className='carrouselContainer'>
        <div className='carrouselContainer__title'>Last Launches</div>
        <div className='carrouselContainer__items'>
          {Object.values(lastLaunches) ? (
            Object.values(lastLaunches).map((item) => (
              <LaunchCard key={item.mission_name} {...item} />
            ))
          ) : (
            <p>No hay datos</p>
          )}
        </div>
      </div>
    </>
  );
};

export default LastLaunches;
