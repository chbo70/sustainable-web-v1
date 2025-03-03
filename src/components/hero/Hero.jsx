import './hero.css';
import Leaf from '../../assets/hero_leaf.jpg';
import Button from '../utils/Button';
import { FaReadme } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      {/* <img className='hero_img' src={Mountain} alt="Mountain view" /> */}
      <img className='hero_img' src={Leaf} alt="Leaf" />
      <div className="hero_wrapper">
        <h3 className="hero_title"> Building a Greener Web</h3>
        <p className="hero_subtitle"> Sustainability meets performance</p>
        <p className="hero_subtitle">Learn how to create an eco-friendly digital experience.</p>
        <div className="hero_cta">
          <Button className="hero_cta_button" text="Explore"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
