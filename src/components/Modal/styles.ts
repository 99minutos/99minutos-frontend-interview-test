import styled from 'styled-components';

import { colors } from '../../assets/styles/config';
import { Cross } from '../../assets/images';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: gray;
`;

export const CloseButton = styled.button`
  position: absolute;
  z-index: 3;
  top: 20px;
  right: 26px;
  border: none;
  outline: none;
  width: 70px;
  height: 70px;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 2px 5px ${colors.shadowDark};
  background-color: ${colors.midNightBlue};

  &:active {
    opacity: 0.8;
    transform: scale(0.96);
  }
`;

export const CloseIcon = styled(Cross)`
  max-width: 100%;
  max-height: 100%;
  fill: ${colors.white};
`;