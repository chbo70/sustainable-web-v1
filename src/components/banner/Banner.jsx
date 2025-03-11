import { React, useRef } from "react";
import "./banner.css";
import CountUp, { useCountUp, pauseResume } from "react-countup";
import { GiEcology } from "react-icons/gi";
import { co2 } from "@tgwf/co2";

const Banner = () => {
  const swdmV4 = new co2({ model: "swd", version: 4 });

  const estimate = swdmV4.perByteTrace(1000000);
  console.log(estimate);

  useCountUp({
    ref: "banner_number",
    end: 2.07,
    decimals: 2,
    duration: 5,
    enableScrollSpy: true,
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });

  return (
    <div className="banner">
      <GiEcology className="banner_number" />
      <div className="banner_number">
        <div id="banner_number" className="banner_number"></div>
        <div className="banner_number">g</div>
      </div>
      <div className="banner_number">of CO&sup2;</div>
    </div>
  );
};

export default Banner;
