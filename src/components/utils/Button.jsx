import "./utils.css"

const Button = ({ className, link, text }) => {
    return (
        <a className={className} type="button" href={link}>{text}</a>
    );
}

export default Button;