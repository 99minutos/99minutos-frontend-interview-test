import {gql} from "@apollo/client"

export const GET_ONE_LAUNCH = gql`
    query Launch($id: ID!) {
        launch(id: $id) {
          id
          mission_name
          launch_date_local
          details
          links {
            flickr_images
            video_link
            article_link
          }
        }
    } 
`

export const GET_ALL_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 10) {
      id
      mission_name
      details
      launch_date_local
    }
  }
`