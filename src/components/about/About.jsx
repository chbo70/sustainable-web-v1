import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import gsap from "gsap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

gsap.registerPlugin();

const images = [
  "https://placehold.co/816x462.jpg?text=1",
  "https://placehold.co/816x462.jpg?text=2",
  "https://placehold.co/816x462.jpg?text=3",
  "https://placehold.co/816x462.jpg?text=4",
  "https://placehold.co/816x462.jpg?text=5",
  "https://placehold.co/816x462.jpg?text=6",
  "https://placehold.co/816x462.jpg?text=7",
  "https://placehold.co/816x462.jpg?text=8",
  "https://placehold.co/816x462.jpg?text=9",
  "https://placehold.co/816x462.jpg?text=10",
  "https://placehold.co/816x462.jpg?text=11",
  "https://placehold.co/816x462.jpg?text=12",
  "https://placehold.co/816x462.jpg?text=13",
];

const About = () => {
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = images.length;

  // Dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -currentIndex * 100 + "%",
        ease: "power2.out",
        duration: 0.2,
      });
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Drag Start
  const handleDragStart = (e) => {
    setIsDragging(true);
    const touch = e.touches ? e.touches[0] : e;
    setStartX(touch.clientX);
    setCurrentX(touch.clientX);
  };

  // Drag Move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches ? e.touches[0] : e;
    setCurrentX(touch.clientX);
  };

  // Drag End
  const handleDragEnd = () => {
    if (!isDragging) return;
    const deltaX = startX - currentX;

    if (deltaX > 50) {
      nextSlide();
    } else if (deltaX < -50) {
      prevSlide();
    }

    setIsDragging(false);
  };

  return (
    <section className="about" ref={aboutRef}>
      <div className="about_text">
        <h1 className="about_text_header">What is this Website About</h1>
        <p className="about_text_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
          incidunt asperiores harum architecto, nisi voluptate dignissimos velit
          accusamus unde aliquam. Debitis quis vero nulla quidem cumque
          repudiandae doloribus eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ratione dolorem ipsum doloremque delectus,
          repellendus dolore possimus deleniti corrupti cupiditate, recusandae
          eligendi, enim earum nemo eos quas reiciendis. Similique, officiis
          sequi.
        </p>
      </div>

      <div className="about_slider">
        <button className="slider_button left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div
          className="slides-container"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="slides-inner" ref={sliderRef}>
            {images.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="slider_button right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default About;
