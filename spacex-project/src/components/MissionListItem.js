import spaceship from '../assets/img/spaceship.png';
import styles from './MissionListItem.module.css'
import { useState } from 'react';

function MissionListItem(props) {
	const defaultClass = styles.card;

	const selectedClass = styles.cardSelected;

	const [backgroundClass, setBackgroundClass] = useState(defaultClass);

	function clickHandler() {
		props.renderMissionContainer(props.mission);
		changeBackground();
	}

	function changeBackground() {
		if (props.backgroudClass === selectedClass) {
			setBackgroundClass(defaultClass)
		} 
		else {
				setBackgroundClass(selectedClass);
		}
	}

	return (
		<div onClick={clickHandler} className={backgroundClass}>
			<img src={spaceship} alt="spaceship" className={styles.imgSpaceship}/>
			<div className={styles.miniDescription}>
				<div className={styles.titleMission}>{props.mission.name}</div>
				<p>{props.mission.site}</p>
				<div className={styles.dateMission}>{props.mission.date}</div>
			</div>
		</div>
	);
}

export default MissionListItem;
