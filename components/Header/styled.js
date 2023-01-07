import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding: 40px 12px;

  @media screen and (min-width: 768px) {
    padding: 80px 24px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 20px;
  a {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`;
