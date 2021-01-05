import React from "react";
import { Link } from "react-router-dom";

// Images
import NotFoundImg from "assets/images/404.svg";

// Styles
import { ButtonTheme, Center } from "globalStyles";
import { NotFoundContainer } from "./styles.elements";

const NotFound = () => {
  return (
    <Center>
      <NotFoundContainer>
        <img src={NotFoundImg} alt="404" />
        <Link to="/">
          <ButtonTheme>Homepage</ButtonTheme>
        </Link>
      </NotFoundContainer>
    </Center>
  );
};

export default NotFound;
