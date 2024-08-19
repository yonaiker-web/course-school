import { Card } from "./components/Card";
import { Course } from "./components/Course";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Layout>
      <Hero>
        <Navbar />
      </Hero>
      <Card />
      <Course />
      <Footer />
    </Layout>
  );
}

export default App;
