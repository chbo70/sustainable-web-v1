import React, { useState } from 'react';
import './carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            src: "https://placehold.co/1200x675.avif",
            quote: "Quote 1"
        },
        {
            src: "https://placehold.co/1200x675.avif",
            quote: "Quote 2"
        },
        {
            src: "https://placehold.co/1200x675.avif",
            quote: "Quote 3"
        },
        {
            src: "https://placehold.co/1200x675.avif",
            quote: "Quote 4"
        },
        {
            src: "https://placehold.co/1200x675.avif",
            quote: "Quote 5"
        }
    ];

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <section className="carousel">
            <button className="carousel_arrow left" onClick={prevSlide}>&#10094;</button>
            <div className="carousel_wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    <div className="carousel_item" key={index}>
                        <img src={item.src} alt={`Slide ${index}`} />
                        <div className="carousel_quote">{item.quote}</div>
                    </div>
                ))}
            </div>
            <button className="carousel_arrow right" onClick={nextSlide}>&#10095;</button>
            <div className="carousel_dots">
                {items.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default Carousel;