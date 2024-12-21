import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import VideoSection from "./components/videosection/VideoSection";
import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Content />
      <Carousel />
      <VideoSection />
      <Footer />
    </>
  );
}

export default App;
