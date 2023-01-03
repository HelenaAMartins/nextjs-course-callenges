import { useEffect, useState } from "react";
import BackHome from "../../components/BackHome";
import Container from "../../components/Container";
import * as Styled from "./styled";

const Lottery = () => {
  const [length, setLength] = useState(6);
  const [displayNumbers, setDisplayNumbers] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const generateRandomNumbers = () => {
    let numbers = [];
    const max = 60;
    const min = 1;

    for (let i = 0; i < length; i++) {
      let n = Math.floor(Math.random() * max) + min;
      let check = numbers.includes(n);

      if (check === false) {
        numbers.push(n);
      } else {
        while (check === true) {
          n = Math.floor(Math.random() * max) + min;
          check = numbers.includes(n);
          if (check === false) {
            numbers.push(n);
          }
        }
      }
    }

    return numbers;
  };

  const handleNumbers = () => {
    setDisplayNumbers([]);
    if (length < 6 || length > 16) setHasError(!hasError);
    if (length < 6) return setMessage("Minimum is 6");
    if (length > 16) return setMessage("Maximum is 16");
    const numbers = generateRandomNumbers();

    setMessage("");
    setHasError(false);
    setDisplayNumbers(numbers as []);
  };

  useEffect(() => {
    const numerosSorteados = [2, 24, 33, 35, 36, 54];
    const numbers = displayNumbers.sort((a: any, b: any) => a - b) as [];

    if (JSON.stringify(numerosSorteados) === JSON.stringify(numbers))
      return setMessage("I have won!");
  }, [displayNumbers]);

  return (
    <Container>
      <Styled.Wrapper>
        <Styled.Title>Mega Lottery</Styled.Title>
        <p>How many numbers would you like to generate?</p>
        <Styled.ErrorMessage visible={hasError}>{message}</Styled.ErrorMessage>
        <Styled.MessageWrapper>
          <Styled.Input
            type="text"
            onChange={(e: any) => {
              setDisplayNumbers([]);
              setLength(Number(e.target.value));
            }}
            value={length}
          />

          <Styled.Button onClick={() => handleNumbers()}>
            Generate numbers
          </Styled.Button>
        </Styled.MessageWrapper>
        <Styled.NumbersWrapper>
          {displayNumbers?.map((number, idx) => (
            <Styled.Number key={idx}>{number}</Styled.Number>
          ))}
        </Styled.NumbersWrapper>
        <BackHome />
      </Styled.Wrapper>
    </Container>
  );
};

export default Lottery;
