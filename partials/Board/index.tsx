import BackHome from "../../components/BackHome";
import Container from "../../components/Container";
import Line from "./Line";

const Board = () => {
  const lines = Array.from({ length: 8 }, (v, k) => k);

  return (
    <Container>
      {lines.map((line) => {
        console.log(line);
        const isWhiteLine = line % 2 === 0;
        return <Line key={`square-${line}`} isWhiteLine={isWhiteLine} />;
      })}
      <BackHome />
    </Container>
  );
};

export default Board;
