import { useEffect, useState } from "react";
import BackHome from "../components/BackHome";
import Button from "../components/Button";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { useTheme } from "styled-components";

export default function Counter() {
  const theme = useTheme();
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (counter !== 10) return;
    setMessage("Maximum score is 10");
  }, [counter]);

  return (
    <Layout title="Counter">
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "90vh",
          }}
        >
          <h1>Counter</h1>
          <h2 style={{ paddingTop: "10px" }}>Value: {counter}</h2>
          <div style={{ display: "flex", gridGap: "20px", padding: "50px 0" }}>
            <Button
              onClick={() => setCounter(counter - 1)}
              disabled={counter === 0}
            >
              -
            </Button>
            <Button
              onClick={() => setCounter(counter + 1)}
              disabled={counter === 10}
            >
              +
            </Button>
          </div>
          {counter === 10 && (
            <span
              style={{ color: theme.colors.tertiary, marginBottom: "30px" }}
            >
              {message}
            </span>
          )}
          <BackHome />
        </div>
      </Container>
    </Layout>
  );
}
