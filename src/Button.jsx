import { Children } from "react";

const baseButtonStyle = {
  padding: "12px 32px",
  borderRadius: "32px",
  color: "#fff",
  fontSize: "24px",
  cursor: "pointer",
  border: "none",
  outline: "none",
};

const purpleButtonStyle = {
  ...baseButtonStyle,
  background: "#6f00ff",
};

const navyButtonStyle = {
  ...baseButtonStyle,
  background: "#141a25",
};

function Button({ color, onClick, children }) {
  const style = color === "navy" ? navyButtonStyle : purpleButtonStyle;
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
