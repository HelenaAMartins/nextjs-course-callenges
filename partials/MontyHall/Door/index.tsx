import { useState } from "react";
import Image from "next/image";

import * as Styled from "./styled";

const Door = ({ selected, onClick, hasGift, number, handleGameOver }: any) => {
  const windows = Array.from({ length: 4 }, (v, k) => k + 1);
  const [isOpen, setIsOpen] = useState(false);

  const handleKnob = () => {
    if (hasGift) {
      handleGameOver(true);
    }
    setIsOpen(true);
  };

  return (
    <Styled.DoorWrapper selected={selected && !isOpen}>
      <Styled.Door opened={isOpen} onClick={onClick}>
        {!isOpen && (
          <>
            <Styled.NumberWrapper>
              <Styled.Number>{number}</Styled.Number>
            </Styled.NumberWrapper>
            <Styled.WindowsWrapper>
              {windows.map((window) => (
                <Styled.Window key={`window-${window}`} />
              ))}
            </Styled.WindowsWrapper>
          </>
        )}
      </Styled.Door>
      {!isOpen && (
        <Styled.Knob
          onClick={() => {
            handleKnob();
          }}
        />
      )}
      {isOpen && hasGift && (
        <Styled.Gift>
          <Image src="/rupee.png" alt="prize" height={80} width={50} />
        </Styled.Gift>
      )}
    </Styled.DoorWrapper>
  );
};

export default Door;
