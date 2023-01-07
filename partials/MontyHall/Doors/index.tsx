import Door from "partials/MontyHall/Door";
import { useState } from "react";
import * as Styled from "./styled";

const Doors = ({ prize, doors, reset }: IDoorsProp) => {
  const [selected, setSelected] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const qtd = Array.from({ length: doors }, (_, i) => i + 1);

  return (
    <Styled.Section>
      <Styled.ButtonBack onClick={() => reset()}>Restart</Styled.ButtonBack>

      <Styled.Button onClick={() => reset()} visible={gameOver}>
        Play again
      </Styled.Button>

      <Styled.Wrapper>
        {qtd.map((number) => (
          <Door
            number={number}
            handleGameOver={setGameOver}
            selected={selected === number}
            hasGift={prize === number}
            onClick={() => setSelected(number)}
            key={`number-${number}`}
          />
        ))}
      </Styled.Wrapper>
    </Styled.Section>
  );
};

export default Doors;
