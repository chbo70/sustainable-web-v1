import React, { useRef, useEffect, useState } from "react";
import Masonry from "../utils/Masonry/Masonry";
import "./differentmethods.css";

const data = [
  { id: 1, image: "https://picsum.photos/id/10/200/300.webp", height: 400 },
  { id: 2, image: "https://picsum.photos/id/14/200/300.webp", height: 300 },
  { id: 3, image: "https://picsum.photos/id/15/200/300.webp", height: 500 },
  { id: 4, image: "https://picsum.photos/id/16/200/300.webp", height: 400 },
  { id: 5, image: "https://picsum.photos/id/17/200/300.webp", height: 700 },
  { id: 6, image: "https://picsum.photos/id/19/200/300.webp", height: 500 },
  { id: 7, image: "https://picsum.photos/id/37/200/300.webp", height: 800 },
  { id: 8, image: "https://picsum.photos/id/39/200/300.webp", height: 500 },
  { id: 9, image: "https://picsum.photos/id/85/200/300.webp", height: 600 },
  { id: 10, image: "https://picsum.photos/id/103/200/300.webp", height: 600 },
  { id: 11, image: "https://picsum.photos/id/104/200/300.webp", height: 700 },
  { id: 12, image: "https://picsum.photos/id/106/200/300.webp", height: 400 },
  { id: 13, image: "https://picsum.photos/id/11/200/300.webp", height: 300 },
];

const DifferentMethods = () => {
  return (
    <section className="differentMethods">
      <h1 className="differentMethods_header">Sample Images</h1>
      <Masonry data={data} />
    </section>
  );
};

export default DifferentMethods;
