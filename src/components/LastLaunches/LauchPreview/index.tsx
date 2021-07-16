import React, { FC, useEffect, useState } from 'react';

import { getParseDate } from '../../../utils';
import { Modal, Mission } from '../../../components';
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

const LauchPreview: FC = () => {

  const imageSource: string = 'https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg';
  const missionName: string = 'Starlink-15 (v1.0)';
  const launchSite: string = 'Cape Canaveral Air Force Station Space Launch Complex 40';
  const lauchDateTime: string = '2020-10-24T11:31:00-04:00';
  const parsedDate: string = getParseDate(lauchDateTime);

  const [isMobile, setIsMobile] = useState<boolean>(true);
  useEffect(() => {
    const configIsMobile = () => {
      const mobileResolutionInPX: number = 768;
      const isMobileDevice: boolean = window.screen.width <= mobileResolutionInPX;
      setIsMobile(() => isMobileDevice);
    }
    
    window.addEventListener('resize', configIsMobile);

    return () => window.removeEventListener('resize', configIsMobile);
  },
  [])

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => isMobile && setIsModalOpen(true);
  const handleCloseModal = () => isMobile && setIsModalOpen(false);

  return (
    <>
      <LauchPreviewStyled onClick={handleOpenModal}>
        <ImageWrapper>
          <LayerAspectRatio>
            <LaunchImage
              src={imageSource}
              alt={missionName}
              width="40"
              height="40"
            />
          </LayerAspectRatio>
        </ImageWrapper>
          
        <InfoWrapper>
          <MisionName>{missionName}</MisionName>
          <LaunchSite>{launchSite}</LaunchSite>
          <LauchDate dateTime={lauchDateTime}>{parsedDate}</LauchDate>
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