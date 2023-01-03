import styled from "styled-components";

export const Button = styled.button`
  padding: 4px 6px;
  min-width: 50px;
  color: ${({ disabled }) => (disabled ? "#000" : "#fff")};
  font-weight: bold;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#ab4e68")};
  border: 0;
`;
