import React, { useState, useEffect } from 'react';

import ReactPlayer from 'react-player';

import { useSelector } from 'react-redux';

import './Mission.css';

const Mission = () => {
  const [selected, setSelected] = useState([]);
  const [articleLink, setArticleLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const state = useSelector((state) => state.launchReducer.selected);
  useEffect(() => {
    setSelected(state[0]);
    handleVideo(state[0]?.links?.video_link);
    setArticleLink(state[0]?.links?.article_link);
    return () => {
      setSelected([]);
      setVideoLink('https://www.youtube.com/watch?v=0qo78R_yYFA');
      setArticleLink('https://www.spacex.com/');
    };
  }, [state]);

  const handleVideo = async (url) => {
    await setVideoLink(url);
  };

  const handleArticleLink = (url) => {
    url ? window.open(url) : window.open(videoLink);
  };
  return (
    <div className='missionContainer'>
      <div className='missionContainer__mediaContainer'>
        {videoLink ? (
          <ReactPlayer
            playing={true}
            src='https://www.youtube.com/watch?v=cei3JhG72bg&t=3s'
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            }}
          />
        ) : (
          <ReactPlayer
            playing={true}
            src={'https://www.youtube.com/watch?v=0qo78R_yYFA'}
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              facebook: {
                appId: '12345',
              },
            }}
          />
        )}
      </div>
      <div className='missionContainer__dataContainer'>
        <div className='missionContainer__dataContainer__missionName'>
          {selected
            ? selected?.mission_name
              ? selected?.mission_name
              : 'Mission Name'
            : 'Mission Name'}
        </div>
        <div className='missionContainer__dataContainer__details'>
          {selected
            ? selected?.details
              ? selected.details
              : 'No available'
            : null}
        </div>
        <div className='seeMore' onClick={() => handleArticleLink(articleLink)}>
          See more
        </div>
      </div>
    </div>
  );
};

export default Mission;
