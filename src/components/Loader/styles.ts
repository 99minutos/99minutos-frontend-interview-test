import styled from 'styled-components';

import { colors } from '../../assets/styles/config';

export const LoaderStyled = styled.div`
  background-color: blue;
  width: 50px;
  height: 50px;
  border: solid 5px ${colors.shadowGray};
  border-top: solid 5px ${colors.black};
  border-radius: 50%;
  background-color: ${colors.transparent};
  will-change: transform;
  transform: rotateZ(0);
  animation: loader 1s linear 0s infinite;

  @keyframes loader {
    0% { transform: rotateZ(0); }
    100% { transform: rotateZ(360deg); }
  }
`;