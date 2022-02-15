import { useQuery, gql } from '@apollo/client';
import MissionListItem from './MissionListItem';
import styles from './MissionList.module.css';

const LAUNCHES = gql`
	{
		launchesPast(limit: 10) {
			id
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}
			links {
				article_link
				video_link
				mission_patch
			}
			details
		}
	}
`;

const Description = "SpaceX’s Starlink V1.0 L15 (also known as Starlink 16) mission will launch 60 Starlink satellites atop its Falcon 9 rocket. The Falcon 9 will lift off from Space Launch Complex 40 (SLC-40), from Cape Canaveral Airforce Station, in Florida. Starlink 15 will mark the 15th operational Starlink mission, boosting the total number of Starlink satellites launched to 953."

function MissionList(props) {
	const { loading, error, data } = useQuery(LAUNCHES);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	const list = data.launchesPast.map(({ id, mission_name, launch_date_local, launch_site, links, details }) => {
		const missionLinks = {
			mission_patch: links.mission_patch ? links.mission_patch : 'patch-spacex.png',
		};

		let spacex_link = "";

		if (links.article_link == null) {
			spacex_link = links.video_link;
		} else {
			spacex_link = links.article_link;
		}

		const mission = {
			name: mission_name,
			links: missionLinks,
			external_link : spacex_link,
			date: launch_date_local,
			site: launch_site.site_name_long,
			details: details ? details : Description,
		};
		return <MissionListItem key={id} mission={mission} renderMissionContainer={props.clickHandler} />;
	});

	return <div className={styles.missionCards}>
				<h1 className={styles.titleCenter}>Last Launches</h1>
					<div className={styles.groupScroll}>
						{list}
					</div>
			</div>;
}

export default MissionList;
