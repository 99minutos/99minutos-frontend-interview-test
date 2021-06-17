import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../css/components/Modal.css';
import astronaut from '../images/astronaut.jpeg'

const Modal = ({ isOpen, onClose, missionSelected }) => {

  if(!isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal--container">
        <button onClick={onClose} className="Modal--close-button">
            X
        </button>
        <img src={missionSelected.links.flickr_images[0] ?? astronaut} alt=""/>
        <div className="Modal--content">
          <h2>{missionSelected.mission_name}</h2>
          <p>{missionSelected.details || 'Details omitted'}</p>
          <a target="_blank" href={missionSelected.links.video_link}>See more</a>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;