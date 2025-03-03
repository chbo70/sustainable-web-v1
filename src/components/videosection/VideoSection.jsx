import React, { useEffect, useRef } from "react";
import "./videosection.css";
import VideoFile from "../../assets/snowy_mountain.mp4";
import Button from "../utils/Button";

const VideoSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.muted = true;
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      {
        threshold: 0.6,
      }
    );

    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="video">
      <div className="video_container">
        <div className="video_wrapper">
          <video className="video_player" ref={videoRef} controls muted>
            <source src={VideoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video_content">
          <div className="video_text">
            <h1 className="video_text_header">Video Section</h1>
            <p className="video_text_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est fuga
              incidunt asperiores harum architecto, nisi voluptate dignissimos
              velit accusamus unde aliquam. Debitis quis vero nulla quidem
              cumque repudiandae doloribus eligendi?
            </p>
            <Button className="video_button" link="#" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
