import styled, { css } from "styled-components";

const doorColor = css`
  border-color: #65350f;

  button {
    background: radial-gradient(
      circle,
      rgba(138, 74, 23, 1) 0%,
      rgba(101, 53, 15, 1) 100%
    );
    border: 1px solid rgba(255 255, 255, 0.3);
    box-shadow: rgb(0 0 0 / 60%) 2px 3px 6px 0px;
  }

  span {
    color: #fff;
  }
`;

const doorColorSelected = css`
  border-color: #ffc800;

  & button {
    background-color: #ffc800;
    border: 1px solid rgba(255 255, 255, 0.3);
    box-shadow: rgb(0 0 0 / 60%) 2px 3px 6px 0px;
  }

  & span {
    color: #ffc800;
  }
`;

export const DoorWrapper = styled.div<IDoorSelectedStyle>`
  border-width: 8px;
  border-style: solid;
  width: 150px;
  height: 250px;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 120%;
    height: 10px;
    background-color: grey;
    left: -10%;
    bottom: -8px;
  }

  ${({ selected }) => (selected ? doorColorSelected : doorColor)}
`;

export const Door = styled.div<IDoorOpenStyle>`
  width: 100%;
  height: 100%;
  background-color: ${({ opened }) => (opened ? "#000" : "#795c34")};
  border: 6px inset #a1886670;
  border-bottom: 0;
`;

export const WindowsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px 35px;
`;

export const Window = styled.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(
    171deg,
    rgba(181, 202, 202, 1) 0%,
    rgba(136, 171, 171, 1) 100%
  );
  border: 2px inset #88abab;
`;

export const Knob = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  margin-left: 8px;
  border: 0;
  position: absolute;
  top: 51%;
`;

export const Gift = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NumberWrapper = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 4px 20px;
  position: absolute;
`;

export const Number = styled.span`
  font-weight: bolder;
  font-size: 26px;
  text-shadow: 2px 2px 4px #000000;
`;
