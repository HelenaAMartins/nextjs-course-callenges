import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #4a4e69;
  border-radius: 4px;
  background-color: #4a4e69;
  color: #f2e9e4;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  padding-bottom: 30px;
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
  background-color: #22223b;
  padding: 8px 16px;
  border-radius: 4px;
  color: #f2e9e4;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #9a8c98;
  }
`;
