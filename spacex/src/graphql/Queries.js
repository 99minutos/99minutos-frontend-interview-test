import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
query{
  launchesPast(limit: 10) {
    id
    details
    mission_name
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
