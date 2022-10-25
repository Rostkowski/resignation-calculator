import React from "react";
import Card from "react-bootstrap/Card";

const Container = (props) => {
  return (
    <Card className={props.className}>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default Container;
