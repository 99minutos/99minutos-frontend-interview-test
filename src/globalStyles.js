import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

:root {
  --main-color: #3ab4f5;
  --card-color: #ffffff;
  --card-radius: 10px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color: #f2f7fc;
}
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 3rem 5rem;

  @media only screen and (max-width: 600px) {
    padding: 3rem 1rem;
  }
`;

export const ButtonTheme = styled.button`
  background-color: var(--main-color);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: var(--card-color);
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Center = styled.div`
  min-height: calc(100vh - 96px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyle;
