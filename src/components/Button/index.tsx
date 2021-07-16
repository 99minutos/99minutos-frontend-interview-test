import React, { FC } from 'react';

import { ButtonProps } from './types';
import { ButtonStyled } from './styles';

const Button: FC<ButtonProps> = ({ children, href }) => {
  const isNoEmptyLink: boolean = !!href;
  return isNoEmptyLink ? (
    <ButtonStyled href={href}
      rel="
        external
        noopener
        noreferrer"
      target="_blank">
      {children}
    </ButtonStyled>
  ) : (
    <ButtonStyled disabled>
      There is no Article
    </ButtonStyled>
  );
}

export default Button;