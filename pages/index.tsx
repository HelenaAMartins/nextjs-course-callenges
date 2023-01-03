import Header from "../components/Header";
import Layout from "../components/Layout";
import Home from "../partials/Home";

export default function HomePage() {
  return (
    <Layout title="Home">
      <Header />
      <Home />
    </Layout>
  );
}
