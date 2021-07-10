import LastLaunches from "./lastLaunches/LastLaunches";
import Mission from "./mission/Mission";
import { useState, useEffect } from "react";
import { api_getLastLaunches } from "../apiCalls/api_getLastLaunches";


export const Contenedor = () => {
  const [apiData, setApiData] = useState([]);
  const [selectedMission, setSelectedMission] = useState({});

  const callbackSetSelectedMission=(missionName)=>{
    const mission=apiData.find(mission=>missionName===mission.mission_name)
    setSelectedMission(mission)
  }

  const loadApiData = async () => {
    const res = await api_getLastLaunches();

    console.log(res.data.launchesPast);
    setApiData(res.data.launchesPast);
  };

  useEffect(() => {
    loadApiData();
  }, []);

  return (
    <>
      <div className="custom-container">
        <LastLaunches apiData={apiData} callbackSetSelectedMission={callbackSetSelectedMission}/>
        <Mission selectedMission={selectedMission}/>
      </div>
    </>
  );
};

export default Contenedor;
