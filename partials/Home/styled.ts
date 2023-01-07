import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-gap: 16px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
