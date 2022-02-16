import React from 'react';
import '../css/components/Card.css';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

const Card = ({ handleClick, missionName, description, launchDateLocal }) => {
  return (
    <div onClick={handleClick} className="Card">
      <h2>{missionName}</h2>
      <p>{description || 'Omitted'}</p>
      <em>{format(parseISO(launchDateLocal), 'dd/MM/yyyy')}</em>
    </div>
  );
};

export default Card;