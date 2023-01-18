import "./index.css";

const Button = ({ isModalDisactive, func }) => {
  return (
    <button
      onClick={func}
      className={`Button ${isModalDisactive ? "active" : "passive"}  `}
    >
      {isModalDisactive ? "🗙" : "➕"}
    </button>
  );
};

export default Button;
