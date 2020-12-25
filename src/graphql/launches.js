import { gql } from '@apollo/client';

export const LAST_LAUNCHES = gql`
	query getLaunches {
		launchesPast(limit: 10) {
			details
			mission_name
			launch_site {
				site_name_long
			}
			launch_date_utc
			id
		}
	}
`;

export const GET_LAUNCH = gql`
	query getLaunch($id: ID!) {
		launch(id: $id) {
			id
			mission_name
			details
			links {
				article_link
				video_link
			}
		}
	}
`;
