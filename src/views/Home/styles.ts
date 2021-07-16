import styled, { css } from 'styled-components';

import { colors, mixins } from '../../assets/styles/config';

export const HomeStyled = styled.main`
  display: flex;
  height: 100vh;
  min-height: 100vh;
`;

export const LastLaunchesWrapper = styled.div`
  flex-basis: 100%;

  ${mixins.responsiveMedium(css`
    max-width: 35%;
  `)}
`;

export const MissionWrapper = styled.div`
  width: 0;
  overflow: hidden;
  visibility: hidden;
  background-color: ${colors.white};

  ${mixins.responsiveMedium(css`
    flex-grow: 1;
    visibility: visible;
  `)}
`;