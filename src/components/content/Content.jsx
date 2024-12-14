import Button from "../utils/Button";
import Card from "../utils/Card";
import "./content.css";
import React, { useEffect, useRef } from "react";

const Content = () => {
  const contentRef = useRef(null);

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

    const contentElement = contentRef.current;

    if (contentElement) {
      observer.observe(contentElement);
    }

    return () => {
      if (contentElement) {
        observer.unobserve(contentElement);
      }
    };
  }, []);

  return (
    <section className="content" ref={contentRef}>
      <div className="content_header_wrapper_2">
        <h1 className="content_header">Latest News</h1>
      </div>
      <div className="content_wrapper_2">
        <Card
          title="Title 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
        <Card
          title="Title 2"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
        <Card
          title="Title 3"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nulla ut nulla sit amet nisi maximus."
        />
      </div>
      <div className="content_button_wrapper_2">
        <Button className="content_button" link="#" text="read more" />
      </div>
    </section>
  );
};

export default Content;
