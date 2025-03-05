import "./utils.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Button = ({ className, link, text }) => {
  return (
    <a className={className} type="button" href={link}>
      {text}
      <MdKeyboardArrowRight className="arrow_icon" />
    </a>
  );
};

export default Button;
