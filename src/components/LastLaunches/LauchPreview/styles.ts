import styled, { css } from 'styled-components';

import { colors, mixins } from '../../../assets/styles/config';
import backgroundPlaceholder from '../../../assets/images/svg/rocket.svg';

const aspectRatio16x9: string = '56.25%';
const aspectRatio1x1: string = '100%';

type LauchPreviewStyledProps = {
  selected: boolean
}

export const LauchPreviewStyled = styled.section<LauchPreviewStyledProps>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 5px ${colors.shadowGray};
  overflow: hidden;
  cursor: pointer;
  background-color: ${colors.white};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  ${({ selected }) => selected && css`
    background-color: ${colors.black};
  
    * { color: white; }
  `}

  &:hover {
    background-color: ${colors.midNightBlue};
  
    * { color: white; }
  }

  &:active {
    opacity: 0.7;
    transform: scale(0.96);  
  }

  ${mixins.responsiveSmall(css`
    flex-direction: row;
  `)}

  ${mixins.responsiveMedium(css`
    flex-direction: column;
  `)}

  ${mixins.responsiveExtraLarge(css`
    flex-direction: row;
  `)}
`;

export const ImageWrapper = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  ${mixins.responsiveSmall(css`
    flex-basis: 110px;
  `)}

  ${mixins.responsiveMedium(css`
    flex-basis: auto;
  `)}

  ${mixins.responsiveExtraLarge(css`
    flex-basis: 110px;
  `)}
`;

export const LayerAspectRatio = styled.div`
  position: relative;
  padding-top: ${aspectRatio16x9};
  background:
    ${colors.metallicSilver}
    url(${backgroundPlaceholder})
    no-repeat
    scroll
    center / 40%;

  ${mixins.responsiveSmall(css`
    padding-top: ${aspectRatio1x1};
    background-size: 80%;
  `)}

  ${mixins.responsiveMedium(css`
    padding-top: ${aspectRatio16x9};
    background-size: 40%;
  `)}

  ${mixins.responsiveExtraLarge(css`
    padding-top: ${aspectRatio1x1};
    background-size: 80%;
  `)}
`;

export const LaunchImage = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 20px;
  min-width: 1px;

  ${mixins.responsiveSmall(css`
    padding: 12px;
    height: 110px;
  `)}

   ${mixins.responsiveMedium(css`
    height: 120px;
    padding: 20px;
  `)}

  ${mixins.responsiveLarge(css`
    height: 110px;
    padding: 12px;
  `)}
`;

export const MisionName = styled.h3`
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  ${mixins.responsiveSmall(css`
    margin-bottom: 6px;
    font-size: 16px;
  `)}
`;

export const LaunchSite = styled.p`
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${mixins.responsiveSmall(css`
    font-size: 14px;
  `)}
`;

export const LauchDate = styled.time`
  display: block;
  margin-top: auto;
  font-size: 14px;
  text-align: right;
`;