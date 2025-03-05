import React, { useEffect, useRef } from "react";
import "./about.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      },
      {
        threshold: 0.4, // Trigger when 10% of the section is visible
      }
    );

    const aboutElement = aboutRef.current;

    if (aboutElement) {
      observer.observe(aboutElement);
    }

    return () => {
      if (aboutElement) {
        observer.unobserve(aboutElement);
      }
    };
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="about_text">
        <h1 className="about_text_header">What is this Website About</h1>
        <p className="about_text_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
          incidunt asperiores harum architecto, nisi voluptate dignissimos velit
          accusamus unde aliquam. Debitis quis vero nulla quidem cumque
          repudiandae doloribus eligendi? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est fuga incidunt asperiores harum architecto, nisi
          voluptate dignissimos velit accusamus unde aliquam. Debitis quis vero
          &nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          fuga incidunt asperiores harum architecto, nisi voluptate dignissimos
          velit accusamus unde aliquam. Debitis quis vero nulla quidem cumque
          repudiandae doloribus eligendi?
        </p>
      </div>
      <div className="about_image_wrapper">
        <img
          class="about_image"
          src="https://placehold.co/816x462.gif"
          alt="placeholder"
        />
      </div>
    </section>
  );
};

export default About;
