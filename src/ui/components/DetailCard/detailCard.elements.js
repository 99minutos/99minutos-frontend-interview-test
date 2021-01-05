import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--card-color);
  border-radius: var(--card-radius);
  text-align: center;
  width: 50vw;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const SlideShow = styled.div`
  position: relative;

  img.arrow {
    width: 2rem;
    padding: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .left {
    left: 0.5rem;
  }
  .right {
    right: 0.5rem;
  }
`;

export const CardImg = styled.div`
  height: 20rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  @media only screen and (min-width: 460px) and (max-width: 1024px) {
    height: 50rem;
  }
`;

export const InfoCard = styled.div`
  padding: 2rem;
`;
