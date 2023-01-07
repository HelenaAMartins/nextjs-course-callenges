import styled from "styled-components";

export const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-image: url("/doorBg.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const InputsWrapper = styled.div`
  border: 1px solid #fff;
  display: flex;
  border-radius: 10px;
  padding: 30px 15px;
  background: rgba(255, 255, 255, 0.178);
  backdrop-filter: blur(10px);
  flex-direction: column;
  max-width: 450px;
  min-width: 230px;
  color: #fff;
`;

export const InfoMessageWrapper = styled.div`
  font-family: "Press Start 2P", cursive;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  grid-gap: 20px;
  max-height: 400px;
  grid-column: 3/ 7;

  @media screen and (min-width: 768px) {
    grid-column: 4 / 6;
  }
`;

export const InputInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 60px;
  grid-gap: 10px;
  margin-bottom: 16px;
  font-size: 12px;
  align-items: center;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 4px 12px;
  color: #e0d2d2;
  width: 55px;
  border-radius: 8px;
  background: rgba(19, 18, 18, 0);
  backdrop-filter: blur(10px);
`;

export const Button = styled.button`
  border: 0;
  font-size: 15pt;
  text-align: center;
  display: inline-block;
  margin: 5px;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
  font-family: inherit;

  &:active {
    box-shadow: none;
    position: relative;
    top: 0.2em;
  }
`;

export const Message = styled.p`
  position: absolute;
  max-width: 30em;
  background-color: #fff;
  padding: 1.125em 1.5em;
  font-size: 10px;
  border-radius: 1rem;
  color: red;
  line-height: 15px;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3),
    0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
  bottom: -45%;

  &::before {
    // layout
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100%;
    left: 1.5em; // offset should move with padding of parent
    border: 0.75rem solid transparent;
    border-top: none;

    // looks
    border-bottom-color: #fff;
    filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 0;
  margin: 8px;
  font-size: 14px;
  color: white;
  padding: 4px 6px;
  border-radius: 4px;
  background-color: #c96100;
`;

export const PageTitle = styled.h1`
  grid-column: 4/ 7;
  font-size: 45px;
  position: absolute;
  top: 10%;
  left: 15%;

  @media screen and (min-width: 768px) {
    left: 23%;
  }
`;
