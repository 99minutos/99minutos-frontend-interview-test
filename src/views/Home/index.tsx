import React, { FC } from 'react';

import { LastLaunches, Mission } from '../../components';
import {
  HomeStyled,
  LastLaunchesWrapper,
  MissionWrapper,
} from './styles';

const Home: FC = () => (
  <HomeStyled>
    <LastLaunchesWrapper>
      <LastLaunches />
    </LastLaunchesWrapper>

    <MissionWrapper>
      <Mission />
    </MissionWrapper>
  </HomeStyled>
);

export default Home;