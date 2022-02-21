import { gql } from '@apollo/client';

const TEN_LAUNCHES_PAS = gql`
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

export default TEN_LAUNCHES_PAS;