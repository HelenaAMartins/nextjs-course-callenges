import styled from "styled-components";

export const Button = styled.button`
  padding: 4px 6px;
  min-width: 50px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.tertiary : theme.colors.primary};
  font-weight: bold;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.primary : theme.colors.button.default};
  border: 0;
  font-size: 24px;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.primary : theme.colors.button.hover};
  }
`;
