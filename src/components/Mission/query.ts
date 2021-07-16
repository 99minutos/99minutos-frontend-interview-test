import { gql } from '@apollo/client';

const GET_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      details
      mission_name
      launch_date_local
      links {
        article_link
        flickr_images
      }
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

export default GET_LAUNCH;