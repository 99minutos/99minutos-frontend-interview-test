import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "./LastLaunches.module.css";
import space from "./space.png";
import Mission from "../Mission/Mission";
// import { Link } from "react-router-dom";

const DATA_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
        video_link
      }
      details
    }
  }
`;

export default function LastLaunches() {
  // Lista de las últimas 10 misiones
  //Al hacer clic en la tarjeta, muestra la Misión en el componente derecho
  //Indicar cual es la carta seleccionada

  const [flag, setFlag] = useState(false);
  const [dateLocal, setDateLocal] = useState(null);

  function handleClick(e, launch) {
    setDateLocal(launch);
    console.log(launch.id);
    setFlag(true);
  }

  const { data, loading, error } = useQuery(DATA_QUERY);
  // const id = data.launchesPast.id;
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  return (
    <div className={styles.container}>
      <div className={styles.launch_cont}>
        <h1 className={styles.h1}>Last Launches</h1>
        <ul className={styles.ul}>
          {data.launchesPast.map((launch) => (
            <div className={styles.launches} key={launch.id}>
              <button
                className={styles.btn}
                onClick={(e) => handleClick(e, launch)}
                id="btn"
              >
                <li className={styles.li}>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/178/178158.png"
                    alt="404"
                    className={styles.img}
                  />
                  <p className={styles.mission_name}> {launch.mission_name}</p>
                  <p className={styles.site}>
                    {launch.launch_site.site_name_long}
                  </p>
                </li>
              </button>
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.mission}>
        {flag ? (
          <Mission id={dateLocal} />
        ) : (
          <div>
            <img src={space} alt="404" width="500" />{" "}
            <h3 className={styles.h3}>
              CLICK ON ANY ROCKET TO SEE ITS INFORMATION{" "}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
