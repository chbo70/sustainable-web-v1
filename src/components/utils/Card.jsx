import "./utils.css";
import { useEffect, useRef } from "react";

const Card = ({ title, content }) => {
    const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 1.0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  return (
    <div className="card">
      <img ref={imgRef} className="card_image" src="https://via.placeholder.com/325x231" alt="placeholder" />
      <h1 className="card_title">{title}</h1>
      <div className="card_divider"></div>
      <p className="card_content">{content}</p>
    </div>
  );
};

export default Card;
