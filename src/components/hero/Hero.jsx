import './hero.css';
import Mountain from '../../assets/mountain-hero.jpg';
import Button from '../utils/Button';

const Hero = () => {
  return (
    <section className="hero">
      <img className='hero_img' src={Mountain} alt="Mountain view" />
      <div className="hero_wrapper">
        <h3 className="hero_title">IN NATURE, NOTHING IS PERFECT</h3>
        <p className="hero_subtitle">and everything is perfect</p>
        <Button className="hero_cta_button" link="#" text="Explore" />
      </div>
    </section>
  );
}

export default Hero;
