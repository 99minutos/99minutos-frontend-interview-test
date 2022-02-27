import { gql } from "@apollo/client";

const MISSIONS_DATA = gql`
  query TenLaunchesPast {
    launchesPast(limit: 10) {
      id
      mission_name
      details
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
        flickr_images
      }
    }
  }
`;
export default MISSIONS_DATA;
