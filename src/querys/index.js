import { gql } from '@apollo/client';

export const LAST_LAUNCHES = gql`
  query {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
            payload_mass_lbs
          }
        }
      }
      ships {
        name
        home_port
        image
      }
      details
    }
  }
`;
