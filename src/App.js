import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import VideoSection from "./components/videosection/VideoSection";
import Carousel from "./components/carousel/Carousel";
import Team from "./components/team/Team";
import ImageSection from "./components/images/ImageSection";
import Banner from "./components/banner/Banner";
import Problems from "./components/problems/Problems";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Banner />
      <Problems />
      <About />
      <ImageSection />
      <Statistics />
      <VideoSection />
      <Content />
      <Footer />
    </>
  );
}

export default App;
