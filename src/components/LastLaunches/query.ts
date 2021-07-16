import { gql } from '@apollo/client';

const GET_LAST_LAUNCHES = gql`
  query GetLastLaunches($limit: Int!) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        flickr_images
      }
    }
  }
`;

export default GET_LAST_LAUNCHES;