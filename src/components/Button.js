import { useState } from "react";
import Data from "./Data";

export default function Button({ launch }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="row">
        <div className="leftColumn">
          <button
            className="leftColumn__button"
            onClick={() => setClicked(!clicked)}
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
        </div>
        <div className="rightColumn">
          {clicked ? <Data launch={launch} /> : ""}
        </div>
      </div>
    </>
  );
}
