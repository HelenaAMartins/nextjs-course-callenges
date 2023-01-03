import Link from "next/link";
import * as Styled from "./styled";

const Footer = () => {
  return (
    <Styled.Wrapper>
      Developed by{" "}
      <Link target="_blank" href="https://github.com/HelenaAMartins">
        Helena Martins
      </Link>
    </Styled.Wrapper>
  );
};

export default Footer;
