import React, { FC } from 'react';

import { ScrollViewStyled } from './styles';

const ScrollView: FC = ({ children }) => (
  <ScrollViewStyled>{children}</ScrollViewStyled>
);

export default ScrollView;