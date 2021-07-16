import styled from 'styled-components';

import { colors } from '../../assets/styles/config';

export const LastLaunchesStyled = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 0 0;

  background-color: ${colors.lightSilver};
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

export const LaunchesList = styled.ol`
  padding: 20px 20px 40px;
  list-style: none;
  overflow-y: auto;
`;

export const ListItem = styled.li`
 &:first-child ~ & { margin-top: 20px; }
`;