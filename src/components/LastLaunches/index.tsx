import React, { FC, useState } from 'react';

import { useQuery } from '@apollo/client';

import ScrollView from '../ScrollView';
import LaunchPreview from './LauchPreview';
import GET_LAST_LAUNCHES from './query';
import {
  LastLaunchesStyled,
  LaunchesList,
  ListItem,
  Title,
} from './styles';

const LastLaunches: FC = () => {

  const { loading, error, data } = useQuery(GET_LAST_LAUNCHES, {
    variables: {
      limit: 10
    }
  });

  const [launchSelected, setLaunchSelected] = useState<string>("");
  const handleSelected = (launchId: string) => (): void => setLaunchSelected(launchId);

  if (loading) return <h2>LOADING...</h2>;
  if (error) return <h2>ERROR</h2>;

  const { launchesPast } = data;
  const lastLaunchesParsed: Array<any> = launchesPast.map((launch: any): any => ({
    id: launch.id,
    imageSource: launch.links.flickr_images[0] ?? "",
    launchDateTime: launch.launch_date_local,
    launchSite: launch.launch_site?.site_name_long,
    missionName: launch.mission_name,
  }))

  const determineSelected = (currentId: string, selectedId: string): boolean => {
    return currentId === selectedId;
  }

  return (
    <LastLaunchesStyled>
      <Title>Last Launches</Title>
      
      <ScrollView>
        <LaunchesList>
        {lastLaunchesParsed.map((launch) => (
          <ListItem key={launch.id}>
            <LaunchPreview
              id={launch.id}
              launchDateTime={launch.launchDateTime}
              launchSite={launch.launchSite}
              missionName={launch.missionName}
              imageSource={launch.imageSource}
              isSelected={determineSelected(launch.id, launchSelected)}
              handleSelect={handleSelected(launch.id)} />
          </ListItem>
        ))}
        </LaunchesList>
      </ScrollView>
    </LastLaunchesStyled>
  );
}

export default LastLaunches;