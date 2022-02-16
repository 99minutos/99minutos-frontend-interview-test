import React, { useState } from 'react'
import './App.css';
import { gql, useQuery } from '@apollo/client'
import ListMissions from './components/ListMissions';
import Mission from './components/Mission';

const launches_past = gql`
query {
    launchesPast(limit: 10) {
        mission_name
        launch_date_local
        details
        launch_site {
          site_name_long
        }
        links {
            article_link
            flickr_images
        }
    }
}
`

function App() {

  const {data, error, loading} = useQuery(launches_past)

  const [ selectedMission, setSelectedMission ] = useState(null)

  if(error) return <span style='color: red'>{error}</span>

  return (
      <div className='container-app row '> 
        <div  className="containerMissions card col-12 col-sm-6 col-xl-5 p-0 m-0">
          <h1 className='m-3'>Last Launches</h1>
          { loading 
            ? <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            : 
                <div className='listMissions'><ListMissions setSelectedMission={setSelectedMission}  mission={data?.launchesPast} /></div>            
          }
        </div>
        <div className='MissionDetails col-12 col-sm-6 col-xl-7 p-0 m-0'><Mission selectedMission={selectedMission}/></div>
      </div>
  );
}

export default App;
