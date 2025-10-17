import { Children } from "react";
import styles from "./Button.module.css";

function Button({ className = "", color, onClick, children }) {
  const classNames = `${styles.button} ${styles[color]} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
