import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import VideoSection from "./components/videosection/VideoSection";
import ImageSection from "./components/images/ImageSection";
import Banner from "./components/banner/Banner";
import Problems from "./components/problems/Problems";
import Statistics from "./components/statistics/Statistics";
import DifferentMethods from "./components/differentMethods/DifferentMethods";

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
      <DifferentMethods />
      <Footer />
    </>
  );
}

export default App;
