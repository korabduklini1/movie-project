import React from "react";

const Input = (props) => {
  return (
    <div
      className={`Input field ${props.className || ""} ${
        props.error ? "error" : ""
      }`}
    >
      <label>{props.label}</label>
      <input
        type={props.type || "text"}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder || ""}
        value={props.value || ""}
        onChange={props.onChange}
      />
      {props.error ? (
        <div style={{ color: "#9a3f38" }}>{props.error}</div>
      ) : null}
    </div>
  );
};

export default Input;
