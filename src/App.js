import React, { Component } from "react";
import characters from "./characters.json";

import Header from "./components/Header";
import Container from "./components/Container";
import Image from "./components/Image";

class App extends Component {

  state = {
    message: "Click an Image to Begin",
    topScore: 0,
    score: 0,
    charArray: characters
  };

  // function called when user has clicked the same image 2X.
  gameOver = () => {
    // we map over all the characters and 
    // set their clicked status to false.
    this.state.charArray.map(char => char.clicked = false);

    // message updated to GAME OVER
    // re-set state of charArray and score.
    this.setState({
      message: "GAME OVER!!! You Clicked The Same Image Twice",
      score: 0,
      charArray: this.state.charArray
    });
  }

  shuffle = array => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i +1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  handleIncrement = id => {
    // We map over all characters
    this.state.charArray.map(char => 
      // if character id is equal to parameter id
      // set clicked status to true.
      char.id === id ? 
      char.clicked = true : 
      null
    );

    // we check if the current score + 1 is greater than the topScore
    // if yes, we will set the topScore below with score + 1
    // else, we should just set the topScore to its current value.
    let tempTopScore = 
      (this.state.score + 1 > this.state.topScore) ? 
      this.state.score + 1 : 
      this.state.topScore
    ;

    this.setState({
      message: "Click The Next Image!",
      score: this.state.score + 1,
      topScore: tempTopScore,
      charArray: this.state.charArray
    })

  };

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <Container message={this.state.message}>
          <div className="clickableImgs">
            {this.shuffle(characters).map(image =>
              <Image 
                id={image.id} 
                img={image.img} 
                clicked={image.clicked} 
                handleIncrement={this.handleIncrement} 
                gameOver={this.gameOver} 
              />
            )}
          </div>
        </Container>
      </div>
    );
  };
}

export default App;