import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 7vh;
  text-align: center;
  line-height: 7vh;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 40px;
`;
