import Image from "next/image";
import Link from "next/link";
import * as Styled from "./styled";

const Card = ({ data }: { data: ICard }) => {
  const { image, title, excerpt, link } = data;
  return (
    <Styled.Wrapper>
      <Styled.Figure>
        <Image src={image} width={400} height={300} alt={title} />
      </Styled.Figure>
      <Styled.InfoWrapper>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      </Styled.InfoWrapper>
      <Styled.Button>
        <Link href={link}>Go to page</Link>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default Card;
