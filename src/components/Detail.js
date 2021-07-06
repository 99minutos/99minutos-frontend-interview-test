import React, { useState, useEffect } from 'react';
import './Detail.css';
import { CircularProgress, Button } from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import GQLConst from '../GQLConst';

export default function Detail({ selectedCard }) {
	const LAST_TEN_MISSIONS = gql`
		${GQLConst.LAST_TEN_MISSIONS}
	`;

	const { loading, error, data } = useQuery(LAST_TEN_MISSIONS);

	const [mission, setMission] = useState(false);

	useEffect(() => {
		setMission(
			data?.launchesPast.find((dataMission) => dataMission.id === selectedCard)
		);
	}, [data, selectedCard]);

	return (
		<div className="detail">
			{selectedCard ? (
				<>
					{loading && (
						<div className="detail__circularProgress">
							<CircularProgress />
						</div>
					)}

					{error && <h2>API Error</h2>}

					{mission && (
						<>
							<div className="detail__video">
								<iframe
									width="100%"
									height="100%"
									src={
										'http://www.youtube.com/embed/' +
										mission?.links.video_link.replace('https://youtu.be/', '')
									}
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
							<div className="detail__info">
								<h1>{mission.mission_name}</h1>
								<p className="detail__details">{mission.details}</p>
								{mission.links.article_link && (
									<a href={mission.links.article_link}>
										<Button variant="contained">See More</Button>
									</a>
								)}
							</div>
						</>
					)}
				</>
			) : (
				<> </>
			)}
		</div>
	);
}
