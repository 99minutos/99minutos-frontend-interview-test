import styles from './MissionContainer.module.css';

function MissionContainer(props) {
	return (
		<div className={styles.missionContainer}>
			{props.mission != null && (
				<div className={styles.dataContainer}>
					<img src={props.mission.links.mission_patch} alt="Patch from mission" className={styles.missionPatchImg}/>
					<h1>{props.mission.name}</h1>
					<p className={styles.missionDetails}>{props.mission.details}</p>
					<div className={styles.buttonLink}>
						<a href={props.mission.external_link}>See More</a>
					</div>
				</div>
			)}
		</div>
	);
}

export default MissionContainer;