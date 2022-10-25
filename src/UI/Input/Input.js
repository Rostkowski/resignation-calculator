import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor={props.id}>
          <b>{props.labelText}</b>
        </label>
        <input
          className="form-control"
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Input;
