import React from "react";
import styles from "./Mission.module.css";
import spacex from "./spacex.png";

export default function Mission({ id }) {
  // Detalles de la misión (imagen,descripcion)
  // Botón "VER MAS" que lleva al link del video
  return (
   
      <div className={styles.launches} key={id.id}>
        {id.links.flickr_images.length ? (
          <img src={id.links.flickr_images} alt="404" className={styles.img} />
        ) : (
          <img src={spacex} alt="404" className={styles.img} />
        )}

        <h1 className={styles.mission}> {id.mission_name}</h1>
        <h5 >({id.launch_date_local.slice(0, 10)})</h5>
        <p>{id.details}</p>
        <a href={id.links.video_link}>
        <button className={styles.btn}>
       SEE MORE
        </button>
        </a>
      </div>
   
  );
}
