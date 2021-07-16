import React, { FC } from 'react';

import { LastLaunches, Mission } from '../../components';
import { MissionWrapper, HomeStyled } from './styles';

const Home: FC = () => {

  return (
    <HomeStyled>
      <LastLaunches />
      <MissionWrapper>
        <Mission />
      </MissionWrapper>
    </HomeStyled>
  );
}

export default Home;