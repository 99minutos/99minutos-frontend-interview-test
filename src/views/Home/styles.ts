import styled, { css } from 'styled-components';

import { mixins } from '../../assets/styles/config';

export const HomeStyled = styled.main`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const MissionWrapper = styled.div`
  width: 0;
  overflow: hidden;
  visibility: hidden;

  ${mixins.responsiveMedium(css`
    flex-shrink: 0;
    width: 65%;
    visibility: visible;
  `)}
`;