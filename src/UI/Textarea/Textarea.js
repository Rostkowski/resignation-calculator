import React from "react";

const Textarea = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.labelText}</label>
      <textarea
        id={props.id}
        className="w-100 mb-3"
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      ></textarea>
    </>
  );
};

export default Textarea;
