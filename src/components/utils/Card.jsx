import "./utils.css";

const Card = ({ title, content }) => {
  return (
    <div className="card_wrapper">
      <div className="content_card">
        <img
          className="content_card_image"
          src="https://placehold.co/325x231.avif"
          alt="placeholder"
        />
        <h1 className="content_card_title">{title}</h1>
        <div className="content_card_divider"></div>
        <p className="content_card_content">{content}</p>
      </div>
    </div>
  );
};

export default Card;
