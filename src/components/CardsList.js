import React, { useState } from 'react';
import './CardsList.css';
import MissionCard from './MissionCard';
import { CircularProgress } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import GQLConst from '../GQLConst';

export default function CardsList({ handleCardSelect }) {
	const LAST_TEN_MISSIONS = gql`
		${GQLConst.LAST_TEN_MISSIONS}
	`;

	const { loading, error, data } = useQuery(LAST_TEN_MISSIONS);

	const [selected, setSelected] = useState(false);

	const onCardSelect = (id) => {
		handleCardSelect(id);
		setSelected(id);
	};

	return (
		<div className="cardsList">
			<h1>Last Launches</h1>

			{loading && (
				<div className="cardList__circularProgress">
					<CircularProgress />
				</div>
			)}

			{error && <h2>API Error</h2>}

			{data?.launchesPast.map((mission) => (
				<MissionCard
					key={mission.id}
					id={mission.id}
					name={mission.mission_name}
					site={mission.launch_site.site_name_long}
					date={mission.launch_date_local}
					selected={selected === mission.id ? true : false}
					handleCardSelect={onCardSelect}
				/>
			))}
		</div>
	);
}
