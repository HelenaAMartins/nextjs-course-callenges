import styled from "styled-components";
import NextLink from "next/link";

export const Link = styled(NextLink)`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  grid-gap: 2px;
`;
