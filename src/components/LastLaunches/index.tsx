import React, { FC, useEffect, useMemo } from 'react';

import { useQuery } from '@apollo/client';

import { getIsMobile} from '../../utils';
import { useLaunch } from '../../context';
import Loader from '../Loader';
import ScrollView from '../ScrollView';
import LaunchPreview from './LauchPreview';
import GET_LAST_LAUNCHES from './query';
import {
  LastLaunchesStyled,
  LaunchesList,
  ListItem,
  Title,
  Wrapper,
} from './styles';

const LastLaunches: FC = () => {

  const { launchSelected, setLaunchSelected } = useLaunch();

  const launchesQuantityToShow: number = 10;

  const { loading, error, data } = useQuery(GET_LAST_LAUNCHES, {
    variables: {
      limit: launchesQuantityToShow
    }
  });

  const lastLaunches = useMemo(() => {
    return data?.launchesPast ?? [];
  },
  [data]);

  const lastLaunchesParsed: Array<any> = lastLaunches.map((launch: any): any => ({
    id: launch.id,
    imageSource: launch.links.flickr_images[0] ?? "",
    launchDateTime: launch.launch_date_local,
    launchSite: launch.launch_site?.site_name_long,
    missionName: launch.mission_name,
  }))

  useEffect(() => {
    const isThereLaunches: boolean = !!lastLaunches.length;
    const isNotMobileDevice: boolean = !getIsMobile();
    const mustSetInitLaunch: boolean = isThereLaunches && isNotMobileDevice;
    if (mustSetInitLaunch) {
      const lastLaunchId: string = lastLaunches[0].id;
      setLaunchSelected(lastLaunchId);
    }
  },
  [lastLaunches, setLaunchSelected])

  const handleSelected = (launchId: string) => (): void => setLaunchSelected(launchId);
  
  const determineSelected = (currentId: string, selectedId: string): boolean => {
    return currentId === selectedId;
  }

  return (
    <LastLaunchesStyled>
      <Title>Last Launches</Title>

      {loading && (<Wrapper><Loader /></Wrapper>)}

      {!!error && (<Wrapper><h2>ERROR</h2></Wrapper>)}

      {!!data && (
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
      )}
    </LastLaunchesStyled>
  );
}

export default LastLaunches;