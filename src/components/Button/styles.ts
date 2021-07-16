import styled, { css } from 'styled-components';

import { colors } from '../../assets/styles/config';

type ButtonStyledProps = {
  disabled?: boolean,
}

export const ButtonStyled = styled.a<ButtonStyledProps>`
  display: block;
  width: 100%;
  line-height: 50px;
  font-weight: 600;
  text-align: center;
  color: ${colors.white};
  cursor: pointer;
  border-radius: 5px;
  background-color: ${colors.black};
  box-shadow: 0 2px 5px ${colors.shadowGray};
  transition: background-color 0.3s ease;

  &:hover { background-color: ${colors.midNightBlue}; }

  &:active {
    opacity: 0.8;
    transform: scale(0.97);
  }

  ${({ disabled }) => disabled && css`
    cursor: not-allowed;

    &,
    &:hover,
    &:active { background-color: ${colors.metallicSilver}; }
  `}
`;