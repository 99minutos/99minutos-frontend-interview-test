import { gql } from '@apollo/client';

const TOP_TEN_MISSIONS = gql`
query TopTenMissions {
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

export default TOP_TEN_MISSIONS;