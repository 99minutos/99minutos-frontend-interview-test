import { gql } from "@apollo/client";
export const LAUNCH = gql`
{
    launchesPast(limit:10){
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      details
      links {
        flickr_images
        article_link
        video_link
      }
      ships {
        name
        home_port
        image
      }
    }
}
`;

//offset: Int order: String sort: String find: LaunchFind