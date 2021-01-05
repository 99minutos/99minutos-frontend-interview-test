import React, { useState } from "react";

// Images
import Rocket from "assets/images/rocket.jpg";

// Icons
import Left from "assets/icons/left.svg";
import Right from "assets/icons/right.svg";

// Styles
import {
  CardContainer,
  CardImg,
  InfoCard,
  SlideShow,
} from "./detailCard.elements";
import { ButtonTheme } from "globalStyles";

const DetailCard = ({ details }) => {
  const [img, setImg] = useState(0);

  const next = () => {
    img < details.links.flickr_images.length - 1 && setImg(img + 1);
  };

  const prev = () => {
    img > 0 && setImg(img - 1);
  };

  return (
    <CardContainer>
      <SlideShow>
        {img > 0 && (
          <img onClick={prev} src={Left} alt="left" className="arrow left" />
        )}
        {details.links.flickr_images.length > 1 &&
          img < details.links.flickr_images.length - 1 && (
            <img
              onClick={next}
              src={Right}
              alt="left"
              className="arrow right"
            />
          )}
        <CardImg>
          <img
            src={details.links.flickr_images[img] ?? Rocket}
            alt="Launch IMG"
          />
        </CardImg>
      </SlideShow>
      <InfoCard>
        <h1>{details.mission_name}</h1>
        <br />
        <p>{details.details || "No details :("}</p>
        <br />
        <a href={details.links.article_link}>
          <ButtonTheme>See more</ButtonTheme>
        </a>
      </InfoCard>
    </CardContainer>
  );
};

export default DetailCard;
