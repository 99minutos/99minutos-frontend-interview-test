import React, { FC } from 'react';

import { useQuery } from '@apollo/client';

import { getParseDate } from '../../utils';
import Button from '../Button';
import Loader from '../Loader';
import ScrollView from '../ScrollView';
import GET_LAUNCHES from './query';
import {
  ButtonWrapper,
  ImageWrapper,
  InfoWrapper,
  Label,
  LaunchImage,
  LayerAspectRatio,
  MissionName,
  MissionDetails,
  MissionStyled,
  Wrapper,
} from './styles';
 
const Mision: FC = () => {

  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      id: "109"
    },
  });

  const isThereNoData: boolean = !data?.launch;

  if (isThereNoData || loading) return (<Wrapper><Loader /></Wrapper>);
  
  if (error) return (<Wrapper><h2>ERROR</h2></Wrapper>);

  const { launch } = data;
  const missionName: string = launch.mission_name;
  const lauchDateTime: string = launch.launch_date_local;
  const parsedDate: string = getParseDate(lauchDateTime);
  const rocketName: string = launch.rocket.rocket_name;
  const rocketType: string = launch.rocket.rocket_type;
  const noMissionDetailsMessage: string = 'There is no details available for this mission';
  const missionDetails: string = launch.details ?? noMissionDetailsMessage;
  const imageSource: string = launch.links.flickr_images?.[0];
  const articleLink: any = launch.links.article_link ?? '';

  return (
    <ScrollView>
      <MissionStyled>
        <ImageWrapper>
          <LayerAspectRatio>
          {imageSource && (
            <LaunchImage
              src={imageSource}
              alt={missionName}
              width="300"
              height="300" />
          )}
          </LayerAspectRatio>
        </ImageWrapper>

        <InfoWrapper>
          <MissionName>{missionName}</MissionName>
          <p><Label>Launch Date:</Label> {parsedDate}</p>
          <p><Label>Rocket Name:</Label> {rocketName}</p>
          <p><Label>Rocket Type:</Label> {rocketType}</p>
          <MissionDetails>{missionDetails}</MissionDetails>
          <ButtonWrapper>
            <Button href={articleLink}> SEE MORE</Button>
          </ButtonWrapper>
        </InfoWrapper>
      </MissionStyled>
    </ScrollView>
  );
}

export default Mision;