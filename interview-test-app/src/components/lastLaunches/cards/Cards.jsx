import { useEffect } from "react";
import { FaRocket } from "react-icons/fa";
import "../../../App.css";


const Cards = ({ selectedCardTitle, setSelectedCardTitle, data, id }) => {
  const handleClick = (e) => {
    const titleSelected=e.currentTarget.childNodes[1].textContent
    setSelectedCardTitle(titleSelected)
  };

  useEffect(() => {
    if (selectedCardTitle === data.title) {
      //added class selected to change background-color
      document.getElementById(id).classList.add("selected");
    } else {
      //removed class selected to change background-color
      document.getElementById(id).classList.remove("selected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCardTitle]);

  return (
    <>
      <div className="custom-card" id={id} onClick={handleClick} tabIndex="-1">
        <div className="custom-card-icono">
          <FaRocket />
        </div>
        <div className="custom-card-title">{data.title}</div>
        <div className="custom-card-text">{data.launchSite}</div>
        <div className="custom-card-fecha">{data.date}</div>
      </div>
    </>
  );
};

export default Cards;
