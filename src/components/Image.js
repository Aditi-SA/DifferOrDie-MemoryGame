import React from "react";

const Image = props => (
  <a href="#">
    <img className="img-thumbnail"
      key={props.id} 
      alt={props.id} 
      src={require(`../${props.img}`)}
      // We set up the function to check clicked status of character onClick.
      // if true, then the gameOver function is called
      // else, we call the increment function to continue tallying score.
      onClick={() => props.clicked ? props.gameOver() : props.handleIncrement(props.id)}
      data-clicked={props.clicked}></img>
  </a>
);

export default Image;