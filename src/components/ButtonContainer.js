import Data from "./Data";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import MISSIONS_DATA from "../graphql/missionsdata";

export default function ButtonContainer() {
  const { data, loading, error } = useQuery(MISSIONS_DATA);
  const [clicked, setClicked] = useState(false);
  const [launched, setLaunched] = useState("");
  const launchesPast = data?.launchesPast;

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  if (error) {
    return <p className="loading">Error 404</p>;
  }

  const handleClick = (e, launch) => {
    setClicked(true);
    setLaunched(launch);
  };

  return (
    <>
      <h1 className="leftColumn__h1">Last Launches</h1>
      <div className="row">
        <div className="leftColumn">
          {launchesPast.map((launch) => (
            <button
              key={launch.id}
              className="leftColumn__button"
              onClick={(e) => handleClick(e, launch)}
            >
              <div className="leftColumn__button__div">
                <img
                  className="leftColumn__button__div__image"
                  src="/images/rocket.png"
                />
                <div className="leftColumn__button__div__text">
                  <p className="leftColumn__button__div__text__name">
                    Mission Name: {launch.mission_name}
                  </p>
                  <p className="leftColumn__button__div__text__site">
                    {launch.mission_name} - {launch.launch_site.site_name_long}
                  </p>
                  <p className="leftColumn__button__div__text__date">
                    {launch.launch_date_local}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="rightColumn">
          {clicked ? (
            <Data launch={launched} />
          ) : (
            <p className="rightColumn__select">
              Select a mission to view information about
            </p>
          )}
        </div>
      </div>
    </>
  );
}
