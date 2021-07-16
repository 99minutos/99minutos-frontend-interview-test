import React, { FC } from 'react';

import { LaunchProvider } from '../../context';
import { LastLaunches, Mission } from '../../components';
import {
  HomeStyled,
  LastLaunchesWrapper,
  MissionWrapper,
} from './styles';

const Home: FC = () => (
  <LaunchProvider>
    <HomeStyled>
       <LastLaunchesWrapper>
        <LastLaunches />
      </LastLaunchesWrapper>

      <MissionWrapper>
        <Mission />
      </MissionWrapper>
    </HomeStyled>
  </LaunchProvider>
);

export default Home;