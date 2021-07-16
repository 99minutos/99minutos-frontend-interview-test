import React, { FC } from 'react';

import { getParseDate } from '../../utils';
import ScrollView from '../ScrollView';
import {
  ImageWrapper,
  InfoWrapper,
  Label,
  LaunchImage,
  LayerAspectRatio,
  MissionName,
  MainButton,
  MissionDetails,
  MissionStyled,
} from './styles';
 
const Mision: FC = () => {

  const imageSource: string = 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg';
  const missionName: string = 'Starlink-15 (v1.0)';
  const missionDetails: string = 'SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.';

  // missionDetail puede ser null
  // const noMissionDetailsMessage: string = 'There is no details available for this mission';

  const lauchDateTime: string = '2020-10-24T11:31:00-04:00';
  const parsedDate: string = getParseDate(lauchDateTime);

  const rocketName: string = 'Falcon 9';
  const rocketType: string = 'FT';

  return (
    <ScrollView>
      <MissionStyled>
        <ImageWrapper>
          <LayerAspectRatio>
            <LaunchImage
              src={imageSource}
              alt={missionName}
              width="300"
              height="300"
            />
          </LayerAspectRatio>
        </ImageWrapper>

        <InfoWrapper>
          <MissionName>{missionName}</MissionName>
          <p><Label>Launch Date:</Label> {parsedDate}</p>
          <p><Label>Rocket Name:</Label> {rocketName}</p>
          <p><Label>Rocket Type:</Label> {rocketType}</p>
          <MissionDetails>{missionDetails}</MissionDetails>
          <MainButton>SEE MORE</MainButton>
        </InfoWrapper>
      </MissionStyled>
    </ScrollView>
  );
}

export default Mision;