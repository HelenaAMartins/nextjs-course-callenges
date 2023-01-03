import Link from "next/link";
import Container from "../Container";
import * as Styled from "./styled";

const Header = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Title>
          Challenges proposed on
          <br />
          {"Leo Moura's "}
          <Link href="https://www.udemy.com/course/nextjs-e-react/">
            Next Course
          </Link>
        </Styled.Title>
      </Container>
    </Styled.Wrapper>
  );
};

export default Header;
