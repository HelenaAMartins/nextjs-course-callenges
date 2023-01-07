import styled from "styled-components";

export const Section = styled.div`
  background: url("/wall-bricks.jpg");
  background-size: cover;
  width: 100%;
  position: relative;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  grid-gap: 15px;
  align-items: center;
`;

export const Button = styled.button<IGameOver>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99;
  border: 0;
  font-size: 35px;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  padding: 15px 5px 15px 15px;
  background-color: lightgray;
  text-shadow: -1px -1px black, 1px 1px white;
  color: gray;
  -webkit-border-radius: 7px;
  -moz-border-radius: 7px;
  -o-border-radius: 7px;
  border-radius: 7px;
  box-shadow: 0 0.2em gray;
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  transform: ${({ visible }) =>
    visible ? "translate(-50%, -50%)" : "translate(-50%, 100%)"};
  transition: all 4s;
  &:active {
    box-shadow: none;
    transform: translate(-50%, -48%);
  }
`;

export const ButtonBack = styled.button`
  position: absolute;
  z-index: 3;
  top: 0;

  background: repeating-linear-gradient(
    45deg,
    #ffc800,
    #ffc800 5px,
    #ffc200 5px,
    #ffc200 10px
  );
  box-shadow: 0 3px 0 #b76113, 0 4px 1px 1px rgba(0, 0, 0, 0.3),
    0 5px 0 5px #75421f, 0 6px 0 5px #8a542b, 0 4px 0 5px #593116,
    0 4px 1px 3px rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(205, 102, 0, 0.5);
  text-shadow: 2px 2px 1px #e78700, -2px 2px 1px #e78700, 2px -2px 1px #e78700,
    -2px -2px 1px #e78700, 0px 2px 1px #e78700, 0px -2px 1px #e78700,
    0px 4px 1px #c96100, 2px 4px 1px #c96100, -2px 4px 1px #c96100;

  cursor: pointer;
  text-decoration: none !important;
  outline: none !important;
  font-family: "Carter One", sans-serif;
  font-size: 10px;
  line-height: 1.5em;
  letter-spacing: 0.1em;
  border: none;
  margin: 15px 15px 30px;
  border-top: 3px solid rgba(255, 255, 255, 0.3);
  color: #fff !important;
  border-radius: 8px;
  padding: 4px 8px 5px;

  &:hover {
    top: 2px;
    box-shadow: 0 2px 0 #b76113, 0 3px 1px 1px rgba(0, 0, 0, 0.3),
      0 4px 0 5px #75421f, 0 5px 0 5px #8a542b, 0 7px 0 5px #593116,
      0 7px 1px 3px rgba(0, 0, 0, 0.3);
  }

  &::before,
  &::after {
    content: "";
    height: 10%;
    position: absolute;
    background: #fff;
    top: -3%;
    border-radius: 99px;
  }

  &::before {
    right: 13%;
    width: 40%;
  }
  &:after {
    width: 5%;
    right: 5%;
  }
`;
