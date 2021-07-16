import React, { FC } from 'react';

import ScrollView from '../ScrollView';
import LaunchPreview from './LauchPreview';
import {
  LastLaunchesStyled,
  LaunchesList,
  ListItem,
  Title,
} from './styles';

const LastLaunches: FC = () => {

  const list: any[] = new Array(10).fill(0);

  return (
    <LastLaunchesStyled>
      <Title>Last Launches</Title>
      
      <ScrollView>
        <LaunchesList>
        {list.map((item, index) => (
          <ListItem key={index.toString()}>
            <LaunchPreview />
          </ListItem>
        ))}
        </LaunchesList>
      </ScrollView>
    </LastLaunchesStyled>
  )
}

export default LastLaunches;