import React from 'react';
import styles from '../styles/Mission.module.css'
import DetailsMission from '../images/DetailsMission.jpg'
import LogoDetails from '../images/LogoDetails.png'
import '../images/LogoDetails.png'


const Mission = ({selectedMission}) => {



  if(!selectedMission) {
    return (
      <div className={styles.containerDetails}>
        <img className={styles.imgDetails} src={DetailsMission} />
        <h2 className={styles.message}>Select a mission to see more details</h2>
      </div>
    )
  }

  return (
    <div className={`${styles.containerDetails}`}>
          {selectedMission.links.flickr_images.length ? (
            <img 
            className={styles.selectedImage} 
            src={selectedMission.links.flickr_images} 
            /> 
          ) : (
            <img className={styles.selectedImage} src={LogoDetails} />
          )}
            
        <h2 className={styles.titleDetails}>{selectedMission.mission_name}</h2>
          { !selectedMission.details ?
                <p className={styles.errorDetails}>Ups... No details found for this mission</p>
              : <p className={styles.textDetails}>{selectedMission.details}</p>
          }
        <div className={styles.btnMoreDetails}>
          { !selectedMission.links.article_link ?
            <p className={styles.errorDetails}>No external links found...</p>
          : <a  className={`${styles.btnDetails} 
                btn btn-outline-primary`} 
                href={selectedMission.links.article_link}
                target="_blank"
                >See more</a>
          }
          
        </div>
    </div>
  )
}

export default Mission