import Cards from "./cards/Cards";
import { useState, useEffect } from "react";

export const LastLaunches = ({ apiData }) => {
  const [selectedCardTitle, setSelectedCardTitle] = useState("");
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const newData = apiData.map((element) => {
      const [año, mes, rest] = element.launch_date_local.split("-");
      const dia = rest.substring(0, 2);
      const date = `${dia}/${mes}/${año}`;
      return {
        title: element.mission_name,
        launchSite: element.launch_site.site_name_long,
        date: date,
      };
    });
    setCardsData(newData);
  }, [apiData]);

  return (
    <>
      <div className="izquierda">
        <div className="izquierda-abajo">
          <div className="title">
            <h2>Last Launches</h2>
          </div>

          <div className="scroll">
            {cardsData.map((data) => (
              <Cards
                selectedCardTitle={selectedCardTitle}
                setSelectedCardTitle={(e) => {
                  setSelectedCardTitle(e);
                }}
                data={data}
                key={data.title}
                id={data.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LastLaunches;
