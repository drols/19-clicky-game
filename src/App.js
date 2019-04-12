import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard"
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
// import Counter from "./components/Counter"

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  // Counter = id => {
  //   const characters = this.state.characters.filter(character => character.id !== id);
  // }

  // Shuffle the images on screen with in onClick.
  randomizeImages = id => {
    this.state.characters.sort(() => Math.random() - 0.25);
    this.setState({ characters });
  };

  // Map over this.state.characters and render a CharacterCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title/>
        {this.state.characters.map(character => (
          <CharacterCard
            randomizeImages={this.randomizeImages}
            id={character.id}
            key={character.id}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
