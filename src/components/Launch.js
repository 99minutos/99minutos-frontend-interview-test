import { useQuery, gql } from "@apollo/client";
const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      details
      links {
        flickr_images
      }
      launch_site {
        site_name_long
      }
    }
  }
`;
export default function Launch() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="missionLaunches">
      {data.launchesPast.map(
        ({ mission_name, details, links, launch_site }) => (
          <div className="w-100" key={mission_name}>
            <h1>🛰 {mission_name}</h1>
            <p>{launch_site.site_name_long}</p>
          </div>
        )
      )}
    </div>
  );
}
