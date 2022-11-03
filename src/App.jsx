import "./App.css";
import "./Card.jsx";
import { animals } from "./animals.js";
import React, { Component } from "react";
import Card from "./Card.jsx";

class App extends Component {
  state = {
    animals: animals,
    searchValue: "",
  };

  addLike = (clickedName) => {
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

  removeLike = (clickedName) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === clickedName) {
          return { ...animal, likes: animal.likes - 1 };
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

  search = (e) =>{
    this.setState({searchValue: e.target.value})
  }

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name.includes(this.state.searchValue)
    })
    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name}
          likes={animal.likes}
          addLike={this.addLike}
          deleteCard={this.deleteCard}
          removeLike={this.removeLike}
        />
      );
    });

    return <div className="background">
    <div className="App">
    <h1>{this.state.animals.length} Animals</h1>
    <input onChange={this.search} stype="text" />
    <div className="row">{animalsList}</div>
    </div>
    </div>;
  }
}

export default App;
