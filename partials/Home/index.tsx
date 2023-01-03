import Container from "../../components/Container";
import { projects } from "../../data";
import Card from "./Card";
import * as Styled from "./styled";

const Home = () => {
  return (
    <>
      <Container>
        <Styled.Grid>
          {projects.map((project, idx: number) => (
            <Card key={`project-${idx}`} data={project} />
          ))}
        </Styled.Grid>
      </Container>
    </>
  );
};

export default Home;
