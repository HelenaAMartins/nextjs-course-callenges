import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.bg};
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  padding-bottom: 30px;
  box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
`;

export const InfoWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 16px;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 24px;
`;

export const Excerpt = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;

export const Figure = styled.figure`
  width: 100%;
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.colors.button.default};
  padding: 8px 16px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
