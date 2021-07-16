import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { typography, base } from './base';

export default createGlobalStyle`
  /* VENDORS */
  ${normalize}

  /* BASE */
  ${typography}
  ${base}
`;