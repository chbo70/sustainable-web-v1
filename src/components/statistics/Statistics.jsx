import React from "react";
import { useState, useEffect } from "react";
import "./statistics.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  Title,
  CategoryScale,
  LinearScale,
  Scale,
  scales,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const dataPie = {
  labels: ["JPEG", "PNG", "AVIF", "WEBP", "SVG+XML", "GIF"],
  datasets: [
    {
      label: "Average Image Format Usage",
      data: [
        5.67, // JPEG
        1.87, // PNG
        8.53, // AVIF
        13.53, // WEBP
        7.67, // SVG+XML
        0.53, // GIF
      ],
      backgroundColor: [
        "#FF6384", // JPEG
        "#36A2EB", // PNG
        "#FFCE56", // AVIF
        "#4BC0C0", // WEBP
        "#9966FF", // SVG+XML
        "#FF9F40", // GIF
      ],
      borderWidth: 1,
    },
  ],
};

export const dataBar = {
  labels: [
    "Big Blue Ocean",
    "Got bag",
    "Oatly",
    "Greenpeace",
    "Unilever",
    "Ikea",
    "Siemens",
    "HP",
    "Waterdrop",
    "Green Webspace",
    "Refurbed",
    "Fridays For Future",
    "Tesla",
    "Schneider Electrics",
    "Apple",
  ],
  datasets: [
    {
      label: "Website Carbon Emissions (g CO₂ per visit)",
      data: [
        1.17, 0.99, 0.31, 1.36, 0.46, 1.21, 0.48, 0.29, 1.46, 0.35, 0.58, 0.47,
        0.85, 1.21, 0.86,
      ],
      backgroundColor: "#4CAF50",
      borderColor: "#388E3C",
      borderWidth: 1,
    },
  ],
};

const optionsBarHorizontal = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Website Carbon Emissions per Visit",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "g CO₂ per visit",
      },
      ticks: {
        stepSize: 0.2,
      },
    },
    x: {
      title: {
        display: false,
        text: "Websites",
      },
    },
  },
};

const Statistics = () => {
  const [chartKey, setChartKey] = useState(0);

  // Funktion, um das Chart neu zu rendern, wenn die Bildschirmgröße sich ändert
  useEffect(() => {
    const handleResize = () => {
      setChartKey((prevKey) => prevKey + 1); // Ändert den Key → zwingt zu Neurendern
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="statistics">
      <div className="statistics_header_wrapper">
        <div className="statistics_header">
          <h1>Web Analysis</h1>
          <p>
            I analyzed 15 webpages with a focus on sustainability to create an
            average profile of how a typical website landing page is structured
            today. By examining key factors such as image formats, media usage,
            and design choices, this analysis provides insights into current web
            development practices and their impact on performance and
            sustainability.
          </p>
        </div>
      </div>
      <div className="statistics_charts">
        <div className="statistics_chart_bar_horizontal_wrapper">
          <div className="statistics_chart_bar_horizontal">
            <Bar key={chartKey} data={dataBar} options={optionsBarHorizontal} />
          </div>
          <div className="statistics_chart_bar_horizontal_content">
            <h2>
              Average CO<sub>2</sub>-Emission per visit
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a et iste laborum sequi eum aspernatur qui voluptate
              quas voluptatum quidem sit delectus cupiditate, blanditiis unde
              quod nemo voluptatibus fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Vitae, placeat. Dignissimos, ea
              aliquid. Aliquid sed ducimus blanditiis, quam accusamus id
              praesentium ipsum! Quos soluta sunt, molestias facilis
              consequuntur commodi perferendis!
            </p>
          </div>
        </div>

        <div className="statistics_chart_pie_wrapper">
          <div className="statistics_chart_pie">
            <Pie key={chartKey} data={dataPie} />
          </div>
          <div className="statistics_chart_pie_content">
            <h2>Average Image Format Usage</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a et iste laborum sequi eum aspernatur qui voluptate
              quas voluptatum quidem sit delectus cupiditate, blanditiis unde
              quod nemo voluptatibus fugiat.
            </p>
          </div>
        </div>

        <div className="statistics_chart_bar_vertical_wrapper">
          <div className="statistics_chart_bar_vertical">
            <Pie key={chartKey} data={dataPie} />
          </div>
          <div className="statistics_chart_bar_vertical_content">
            <h2>Average Image Format Usage</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis a et iste laborum sequi eum aspernatur qui voluptate
              quas voluptatum quidem sit delectus cupiditate, blanditiis unde
              quod nemo voluptatibus fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
