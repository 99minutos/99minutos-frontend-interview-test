import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--card-color);
  padding: 1.5rem;
  border-radius: var(--card-radius);
  box-shadow: 0 4px 144px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 1rem !important;
  color: #000 !important;

  .cardDetails {
    text-align: justify;
  }
  .date {
    text-align: right;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
