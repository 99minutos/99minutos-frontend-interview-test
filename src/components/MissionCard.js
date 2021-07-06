import React from 'react';
import './MissionCard.css';
import Card from '@material-ui/core/Card';
import Moment from 'react-moment';

export default function MissionCard({
	id,
	name,
	site,
	date,
	selected,
	handleCardSelect,
}) {
	const handleCardClick = (e) => {
		handleCardSelect(id);
	};

	return (
		<Card
			className={'missionCard' + (selected ? ' selected' : '')}
			onClick={handleCardClick}
		>
			<h2>{name}</h2>
			<p>{site}</p>
			<Moment className="missionCard__date" format="DD/MM/YYYY">
				{date}
			</Moment>
		</Card>
	);
}
