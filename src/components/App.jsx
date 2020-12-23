import React, { Fragment, useState, useEffect } from 'react';
import '../css/App.css';
import Card from "./Card";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [missions, setMissions] = useState([]);
  const [missionSelected, setMissionSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function getData() {
      try{
        const response = await fetch('https://api.spacex.land/graphql/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: `{
              launches(limit: 10) {
                id
                mission_id
                mission_name
                launch_date_local
                details
                links {
                  flickr_images
                  video_link
                }
              }
            }`
          })
        });
        setLoading(false);
        const body = await response.json();
        setMissions(body.data.launches);
      } catch(error) {
        setError('Something went wrong')
      }
    };
    getData()
  }, [])

  const handleClick = (event, key) => {
    setMissionSelected(missions[key])
    setIsOpen(!isOpen)
  }
  return (
    <Fragment>
      <h1>Last Launches 🚀</h1>
      {!loading && !error && missions.map((mission, index) => {
        return <Card
          handleClick={(event) => handleClick(event, index)}
          missionName={mission.mission_name}
          description={mission.details}
          launchDateLocal={mission.launch_date_local}
          key={mission.id}
        />
      })}
      {error && <h1 className="Error">{error}</h1>}
      <Modal onClose={handleClick} isOpen={isOpen} missionSelected={missionSelected} />
    </Fragment>
  );
};

export default App;