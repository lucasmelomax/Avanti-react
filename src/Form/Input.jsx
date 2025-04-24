import React from "react";
import styles from "./Input.module.css";
import LUPA from "../img/lupa.svg?react";

const Input = ({ type, name, value, placeholder, onChange,}) => {
  return (
    <div className={styles.input}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className={styles.lupa}>
        <LUPA />
      </button>
    </div>
  );
};

export default Input;
