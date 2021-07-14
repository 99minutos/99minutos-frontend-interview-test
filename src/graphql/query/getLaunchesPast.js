import { gql } from '@apollo/client';

export const GET_LAUNCHES_PAST = gql`
{
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
        site_name
      }
      links {
        article_link
        video_link
        flickr_images
      }
      ships {
        name
        home_port
        image
      }
      details
      id
    }
  }  
`;