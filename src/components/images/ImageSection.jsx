import React from "react";
import { useEffect } from "react";
import "./imagesection.css";

const ImageSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".image-content-list-item");
      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      const firstItemRect = firstItem.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();

      if (firstItemRect.top <= 0 && lastItemRect.bottom >= window.innerHeight) {
        items.forEach((item) => item.classList.add("fixed"));
      } else {
        items.forEach((item) => item.classList.remove("fixed"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="image-section">
        <div className="video_triangle_1"></div>
      <div className="image-section-overlay">
        <ul className="image-content-list">
          <li className="image-content-list-item">
            <div className="image-content">
              <h1 className="image-content-title">Title 1</h1>
              <p className="image-content-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae, quam officiis placeat soluta distinctio harum,
                consectetur reiciendis, nesciunt doloremque similique possimus
                iure ipsa et non blanditiis? Illo culpa iusto quasi?
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h1 className="image-content-title">Title 2</h1>
              <p className="image-content-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
                rerum voluptate dicta atque ea pariatur quidem error sunt ullam
                eligendi quaerat quisquam, porro quae! Illo sit dignissimos eius
                perferendis corrupti.
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h1 className="image-content-title">Title 3</h1>
              <p className="image-content-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Veritatis ut, saepe expedita ullam fugit distinctio iusto porro.
                Error deserunt neque quasi totam deleniti, dolores aperiam
                libero ipsum vero dolorem repellat.
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h1 className="image-content-title">Title 4</h1>
              <p className="image-content-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus earum velit vel perferendis natus accusantium fugiat
                assumenda praesentium. Ea numquam blanditiis quis ratione
                aliquam provident laudantium officiis, iste pariatur veniam.
              </p>
              <div className="video_triangle_2"></div>
            </div>
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ImageSection;
