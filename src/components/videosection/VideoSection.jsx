import React, { useEffect, useRef } from "react";
import "./videosection.css";
import VideoFile from "../../assets/mountain_wind_wheel.mp4";

const VideoSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.muted = true; // Ensure the video is muted
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the video is visible
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
            <div className="video_wrapper">
                <video className="video_player" ref={videoRef} controls muted>
                    <source src={VideoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default VideoSection;