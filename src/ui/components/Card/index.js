import React from "react";

// Styles
import { CardContainer } from "./card.elements.js";

const Card = ({ launch }) => {
  return (
    <CardContainer>
      <h2>{launch.mission_name}</h2>
      <br />
      <p className="cardDetails">{launch.details || "No details :("}</p>
      <br />
      <p className="date">
        {new Date(launch.launch_date_utc).toLocaleDateString()}
      </p>
    </CardContainer>
  );
};

export default Card;
