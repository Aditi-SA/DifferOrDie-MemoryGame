import React from "react";

const Header = props => (
  <header>
    <nav className="navbar navbar-dark bg-primary">
      <a href="/" className="navbar-brand"> </a>
      <span id="message" className="navbar-brand mb-0 h1">Test your Memory!</span>
      <span id="score" className="navbar-brand mb-0 h1">Score: {props.score} | Top Score: {props.topScore}</span>
    </nav>
  </header>
);

export default Header;