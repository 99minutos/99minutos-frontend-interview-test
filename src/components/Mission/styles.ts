import styled, { css } from 'styled-components';

import placeholderImage from '../../assets/images/svg/rocket.svg';
import { colors, mixins } from '../../assets/styles/config';

const aspectRatio18x9: string = '50%';
const aspectRatio1x1: string = '100%';

export const MissionStyled = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
`;

export const LayerAspectRatio = styled.div`
  position: relative;
  z-index: 1;
  padding-top: ${aspectRatio1x1};
  background:
    ${colors.white}
    url(${placeholderImage})
    no-repeat
    scroll
    center / 40%;

  ${mixins.responsiveMedium(css`
    padding-top: ${aspectRatio18x9};
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
  padding: 40px;
  background-color: ${colors.white};
  line-height: 22px;
  letter-spacing: -0.2px;

  & > * + * { margin-top: 20px; }
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

export const MissionName = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const MissionDetails = styled.div`
  text-align: left;
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;