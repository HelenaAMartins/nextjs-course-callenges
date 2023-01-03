import * as Styled from "./styled";

const Line = ({ isWhiteLine }) => {
  const squares = Array.from({ length: 8 }, (v, k) => k);
  return (
    <Styled.Wrapper isWhiteLine={isWhiteLine}>
      {squares.map((_, idx) => (
        <Styled.Square key={idx} />
      ))}
    </Styled.Wrapper>
  );
};

export default Line;
