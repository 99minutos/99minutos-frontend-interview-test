import { css } from 'styled-components';

import montseratRegularWoff from '../../fonts/Montserrat/montserrat-v15-latin-regular.woff';
import montseratRegularTtf from  '../../fonts/Montserrat/montserrat-v15-latin-regular.ttf';
import montserat600Woff from  '../../fonts/Montserrat/montserrat-v15-latin-600.woff';
import montserat600Ttf from  '../../fonts/Montserrat/montserrat-v15-latin-600.ttf';
import montserat800Woff from  '../../fonts/Montserrat/montserrat-v15-latin-800.woff';
import montserat800Ttf from  '../../fonts/Montserrat/montserrat-v15-latin-800.ttf';
import montserat900Woff from  '../../fonts/Montserrat/montserrat-v15-latin-900.woff';
import montserat900Ttf from  '../../fonts/Montserrat/montserrat-v15-latin-900.ttf';

export default css`
  /* Montserrat */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      url(${montseratRegularWoff}) format('woff'),
      url(${montseratRegularTtf}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src:
      url(${montserat600Woff}) format('woff'),
      url(${montserat600Ttf}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src:
      url(${montserat800Woff}) format('woff'),
      url(${montserat800Ttf}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src:
      url(${montserat900Woff}) format('woff'),
      url(${montserat900Ttf}) format('truetype');
  }
`;