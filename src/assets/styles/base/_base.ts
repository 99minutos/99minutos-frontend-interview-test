import { css } from 'styled-components';

import { colors } from '../config';

export default css`
  html * {
    box-sizing: border-box;
    margin: 0;
    -webkit-tap-highlight-color: ${colors.transparent};
  }

  :root {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: ${colors.darkSilver};
    background-color: ${colors.lightSilver};
  }

  html,
  body {
    min-width: 360px;
    min-height: 100vh;
  }

  body {
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 28px;
    color: ${colors.black};
  }

  a { text-decoration: none; }
`;