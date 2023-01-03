import styled, { css } from "styled-components";

const blackLine = css`
  background-color: #fff;
  &:nth-child(odd) {
    background-color: #000;
  }
`;

const whiteLine = css`
  background-color: #000;
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(8, 1fr);

  div {
    ${({ isWhiteLine }) => (isWhiteLine ? whiteLine : blackLine)}
  }
`;

export const Square = styled.div`
  width: 100%;
  border: 1px solid white;
  height: 100px;
`;
