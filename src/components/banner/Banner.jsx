import { React, useRef, useState, useEffect } from "react";
import "./banner.css";
import CountUp, { useCountUp, pauseResume } from "react-countup";
import { GiEcology } from "react-icons/gi";
import { co2 } from "@tgwf/co2";

const Banner = () => {
  const swdmV4 = new co2({ model: "swd" });
  const [emission, setEmission] = useState(0);

  function getPageWeight() {
    // Check if performance API is supported
    if (!window.performance || !window.performance.getEntriesByType) {
      console.warn("Performance API not supported, using fallback estimation.");

      // Use fallback estimation
      if (navigator.connection && navigator.connection.downlink) {
        const estimatedSize = navigator.connection.downlink * 1000 * 100; // Approximate 100s of data transfer
        console.log("Using estimated network size:", estimatedSize, "bytes");
        return estimatedSize;
      }

      console.warn("No reliable method to determine page weight.");
      return 0;
    }

    // Get resource data if available
    const performance = window.performance.getEntriesByType("resource");
    if (performance.length > 0) {
      const transferSize = performance.reduce(
        (acc, cur) => acc + cur.transferSize,
        0
      );
      return transferSize;
    }

    console.warn("Performance API available but returned no data.");
    return 0;
  }

  useEffect(() => {
    const handleLoad = () => {
      requestIdleCallback(() => {
        const pageWeight = getPageWeight();
        if (pageWeight > 0) {
          const estimate = swdmV4.perVisit(pageWeight);
          console.log("Estimation from pageWeight", estimate.toFixed(3), "g");
          setEmission(estimate.toFixed(3));
        }
      });
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div className="banner">
      <GiEcology className="banner_number" />
      <div className="banner_number">
        <div id="banner_number" className="banner_number">
          {emission > 0 && (
            <CountUp
              end={emission}
              decimals={2}
              duration={3}
              enableScrollSpy={true}
            />
          )}
        </div>
        <div className="banner_number">g</div>
      </div>
      <div className="banner_number">of CO&sup2;</div>
    </div>
  );
};

export default Banner;
