import "./App.css";
import "./Card.jsx";
import { animals } from "./animals.js";
import React, { Component } from "react";
import Card from "./Card.jsx";

class App extends Component {
  state = {
    animals: animals,
  };

  addLike = (clickedName, numOflikes) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === clickedName) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
  };

  deleteCard = (clickedName) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== clickedName
    );
    this.setState({ animals: updatedArray });
  };

  render() {
    const animalsList = this.state.animals.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          addLike={this.addLike}
          deleteCard={this.deleteCard}
        />
      );
    });

    return <div className="row">{animalsList}</div>;
  }
}

export default App;
