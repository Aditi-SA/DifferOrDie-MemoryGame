import React from "react";

const Container = props => (
  <div className="container">
    <div className="jumbotron text-center">
      <h1 className="display-4">{props.message}</h1>
      <p>Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    {props.children}
  </div>
);

export default Container;