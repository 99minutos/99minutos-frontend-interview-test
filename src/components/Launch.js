import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      details
      links {
        flickr_images
        video_link
      }
      launch_site {
        site_name_long
      }
      launch_date_local
    }
  }
`;
export default function Launch({ getInfo }) {
  const [selected, setSelected] = useState("");
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="missionLaunches">
      {data.launchesPast.map(
        ({ mission_name, details, links, launch_site }) => (
          <div
            className="missionParent w-100 "
            key={mission_name}
            onClick={() => {
              getInfo(mission_name, details, links, launch_site);
              setSelected(mission_name);
            }}
            style={{
              color: selected === mission_name ? "red" : "",
            }}
          >
            <div className="missionItem">
              <h1>🛰 {mission_name}</h1>
              <p>{launch_site.site_name_long}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
