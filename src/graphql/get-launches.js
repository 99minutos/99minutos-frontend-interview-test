import gql from "graphql-tag";

export const GET_LAUNCHES = gql`
  query launchesPast($limit: Int, $order: String) {
    launchesPast(limit: $limit, order: $order) {
      launch_date_utc
      mission_name
      id
      details
    }
  }
`;

export const GET_LAUNCH = gql`
  query launch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      links {
        flickr_images
        article_link
      }
    }
  }
`;
