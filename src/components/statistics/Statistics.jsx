import React from "react";
import { useState, useEffect, useRef } from "react";
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
  RadialLinearScale,
  PointElement,
  Filler,
  LineElement,
} from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  Filler,
  LineElement
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

const dataLine = {
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
      label: "Number of Images per Website",
      data: [26, 42, 21, 42, 15, 78, 18, 14, 109, 45, 50, 33, 23, 23, 28],
      borderColor: "rgba(34, 202, 236, 1)",
      backgroundColor: "rgba(34, 202, 236, 0.2)",
      pointBackgroundColor: "rgba(34, 202, 236, 1)",
      borderWidth: 2,
      tension: 0.3, // Smooth curves
    },
    {
      label: "Average (37.8)",
      data: Array(15).fill(37.8), // Horizontal reference line for avg
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 2,
      borderDash: [5, 5], // Dashed line
      pointRadius: 0,
    },
  ],
};

const optionsLine = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 120, // Adjust based on highest value
      ticks: {
        stepSize: 20,
      },
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
    },
    x: {
      ticks: {
        autoSkip: false,
        maxRotation: 45,
        minRotation: 45,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
};

const Statistics = () => {
  const [chartKey, setChartKey] = useState(0);
  const prevWindowSize = useRef({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const currentWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      if (
        currentWindowSize.width !== prevWindowSize.current.width ||
        currentWindowSize.height !== prevWindowSize.current.height
      ) {
        setChartKey((prevKey) => prevKey + 1); // Force re-render
        prevWindowSize.current = currentWindowSize; // Update the previous window size
      }
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

        <div className="statistics_chart_line_wrapper">
          <div className="statistics_chart_line">
            <Line key={chartKey} data={dataLine} options={optionsLine} />
          </div>
          <div className="statistics_chart_line_content">
            <h2>Total used Images</h2>
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
