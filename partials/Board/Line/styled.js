import styled, { css } from "styled-components";

const blackLine = css`
  background-color: ${({ theme }) => theme.colors.white};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const whiteLine = css`
  background-color: ${({ theme }) => theme.colors.black};
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.white};
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
