import "./utils.css";

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <img
        className="card_image"
        src="https://via.placeholder.com/325x231"
        alt="placeholder"
      />
      <h1 className="card_title">{title}</h1>
      <div className="card_divider"></div>
      <p className="card_content">{content}</p>
    </div>
  );
};

export default Card;
