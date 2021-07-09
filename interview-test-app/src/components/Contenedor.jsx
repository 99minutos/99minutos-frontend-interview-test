import LastLaunches from "./lastLaunches/LastLaunches";
import Mission from "./mission/Mission";
import { useState, useEffect } from "react";
import { api_getLastLaunches } from "../apiCalls/api_getLastLaunches";


export const Contenedor = () => {
  const [apiData, setApiData] = useState([]);

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
      <div className="container">
        <LastLaunches apiData={apiData}/>
        <Mission apiData={apiData}/>
      </div>
    </>
  );
};

export default Contenedor;
