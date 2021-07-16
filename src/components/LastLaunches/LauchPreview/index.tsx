import React, { FC, useEffect, useState } from 'react';

import { getIsMobile, getParseDate } from '../../../utils';
import { Modal, Mission } from '../../../components';
import { LauchPreviewProps } from './types';
import {
  ImageWrapper,
  InfoWrapper,
  LauchDate,
  LaunchImage,
  LaunchSite,
  LayerAspectRatio,
  LauchPreviewStyled,
  MisionName,
} from './styles';

const LauchPreview: FC<LauchPreviewProps> = (props) => {

  const { imageSource, launchDateTime, launchSite, missionName } = props;
  const { isSelected, handleSelect } = props;
  const doesLaunchHasImage: boolean = !!imageSource;
  const parsedDate: string = getParseDate(launchDateTime);

  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => isMobile && setIsModalOpen(true);
  const handleCloseModal = () => isMobile && setIsModalOpen(false);
  const handleClick = (): void => {
    handleSelect?.();
    handleOpenModal();
  }

  useEffect(() => {
    
    const configIsMobile = () => {
      const isMobileDevice: boolean = getIsMobile();
      setIsMobile(() => isMobileDevice);
    }

    configIsMobile();

    window.addEventListener('resize', configIsMobile);

    return () => window.removeEventListener('resize', configIsMobile);
  },
  [])

  return (
    <>
      <LauchPreviewStyled
        onClick={handleClick}
        selected={isSelected}>

        <ImageWrapper>
          <LayerAspectRatio>
          {doesLaunchHasImage && (
            <LaunchImage
              src={imageSource}
              alt={missionName}
              width="40"
              height="40" />
          )}
          </LayerAspectRatio>
        </ImageWrapper>
          
        <InfoWrapper>
          <MisionName>{missionName}</MisionName>
          <LaunchSite>{launchSite}</LaunchSite>
          <LauchDate dateTime={launchDateTime}>{parsedDate}</LauchDate>
        </InfoWrapper>
      </LauchPreviewStyled>

      {isMobile && isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <Mission />
        </Modal>
      )}
    </>
  );
}

export default LauchPreview;