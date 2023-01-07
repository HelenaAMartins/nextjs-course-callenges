import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
`;

export const Title = styled.h1`
  font-size: 76px;
  margin-bottom: 16px;
`;

export const NumbersWrapper = styled.div`
  display: flex;
  margin: 20px 0 30px;
  grid-gap: 20px;
  min-height: 60px;
  border-radius: 4px;
`;

export const Number = styled.span`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  min-width: 60px;
  min-height: 60px;
  line-height: 60px;
  border-radius: 50%;
  text-align: center;
`;

export const MessageWrapper = styled.div`
  display: flex;
  margin: 24px 0;
`;

export const Input = styled.input`
  padding: 8px 14px;
  border: 0;
  border-radius: 16px 0 0 16px;
  width: 60px;
  position: relative;
`;

export const Button = styled.button`
  padding: 8px 14px;
  background-color: ${({ theme }) => theme.colors.button.default};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 16px 16px 0;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.hover};
  }
`;

export const ErrorMessage = styled.span<IError>`
  color: #fff;
  background-color: #b73a3a;
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 16px;
  position: absolute;
  top: 0px;
  transform: ${({ visible }) =>
    visible ? "translateY(25px)" : "translateY(0)"};
  transition: all 0.5s;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;
