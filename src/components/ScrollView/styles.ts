import styled from 'styled-components';

import { colors } from '../../assets/styles/config';

export const ScrollViewStyled = styled.div`
  height: 100%;
  overflow-y: auto;

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track {
    background-color: ${colors.metallicSilver};
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.midNightBlue};
    border-radius: 3px;
  }
`;