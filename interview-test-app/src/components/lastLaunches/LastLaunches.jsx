import React from "react"
import Cards from "./cards/Cards";
import { useState } from "react";
import {transformDate} from "../../shared/transformDate"

export const LastLaunches = ({ apiData, callbackSetSelectedMission }) => {
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [cardsData, setCardsData] = useState([]);

  React.useEffect(() => {
    const newData = apiData.map((element) => {
      const date = element.launch_date_local

      return {
        title: element.mission_name,
        launchSite: element.launch_site.site_name_long,
        date: transformDate(date),
        dateForSorting: transformDate(date,{needToSort:true}),
      };
    });

    newData.sort((a, b) => b.dateForSorting - a.dateForSorting);
    setCardsData(newData);
  }, [apiData]);

  return (
      <div className="izquierda">
        <div className="izquierda-abajo">
          <div className="title">
            <h2>Last Launches</h2>
          </div>

          <div className="scroll">
            {cardsData.map((card) => (
              <Cards
                selectedCardTitle={selectedCardTitle}
                setSelectedCardTitle={(e) => {
                  setSelectedCardTitle(e);
                  callbackSetSelectedMission(e);
                }}
                data={card}
                key={card.title}
                id={card.title}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default LastLaunches;
