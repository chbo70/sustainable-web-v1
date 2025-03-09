import React from "react";
import Feature from "./Feature";
import "./problems.css";

const Problems = () => {
  const reasons = [
    {
      title: "Global CO₂ Ranking",
      reason: "The web industry is the 6th biggest CO₂ emitter worldwide.",
      features: [
        { text: "Massive data transfer", included: false },
        { text: "Unoptimized websites", included: false },
        { text: "Heavy reliance on servers", included: false },
      ],
    },
    {
      title: "Web App Complexity",
      reason: "Web applications are becoming more complex and inefficient.",
      features: [
        { text: "More animations & JS", included: true },
        { text: "Increased resource use", included: true },
        { text: "Unnecessary scripts", included: false },
      ],
    },
    {
      title: "Page Size Growth",
      reason: "Web pages have drastically increased in size over time.",
      features: [
        { text: "More images & videos", included: true },
        { text: "Higher energy use", included: true },
        { text: "Data waste", included: true },
      ],
    },
  ];

  return (
    <section className="problems">
      <div className="app_header">
        <h1>Why Sustainable Web Design Matters</h1>
        <p>Reducing CO₂ emissions and improving web efficiency</p>
      </div>
      <div className="card-container">
        {reasons.map((reason, index) => (
          <Feature key={index} {...reason} isMain={index === 1} />
        ))}
      </div>
    </section>
  );
};

export default Problems;
