import { gql, DocumentNode } from '@apollo/client';

export const GET_LAUNCHES_PAST: DocumentNode = gql`
{
    launchesPast(limit: 10) {
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
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
      id
      details
      
    }
  }
  
`;