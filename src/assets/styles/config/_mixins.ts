import { css, CSSProp } from 'styled-components';

import breakpoints from './_breakpoints';

export const responsiveSmall = (styles: CSSProp): CSSProp => css`
  @media screen and (min-width: ${breakpoints.small}) {
    ${styles}
  }
`;

export const responsiveMedium = (styles: CSSProp): CSSProp => css`
  @media screen and (min-width: ${breakpoints.medium}) {
    ${styles}
  }
`;

export const responsiveLarge = (styles: CSSProp): CSSProp => css`
  @media screen and (min-width: ${breakpoints.large}) {
    ${styles}
  }
`;

export const responsiveExtraLarge = (styles: CSSProp): CSSProp => css`
  @media screen and (min-width: ${breakpoints.extraLarge}) {
    ${styles}
  }
`;