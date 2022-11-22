import "./App.css";
import "./Card.jsx";
import { birds } from "./animals";
import React, { Component } from "react";
import Card from "./Card.jsx";

class Birds extends Component {
  state = {
    birds: birds,
    searchValue: "",
  };

  addLike = (clickedName) => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === clickedName) {
          return { ...bird, likes: bird.likes + 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };

  removeLike = (clickedName) => {
    this.setState((state) => {
      const updatedArray = state.birds.map((bird) => {
        if (bird.name === clickedName) {
          return { ...bird, likes: bird.likes - 1 };
        } else {
          return bird;
        }
      });
      return {
        birds: updatedArray,
      };
    });
  };

  deleteCard = (clickedName) => {
    const updatedArray = this.state.birds.filter(
      (bird) => bird.name !== clickedName
    );
    this.setState({ birds: updatedArray });
  };

  search = (e) =>{
    this.setState({searchValue: e.target.value})
  }

  render() {
    const animalFilter = this.state.birds.filter((bird) => {
      return bird.name.includes(this.state.searchValue)
    })
    const animalsList = animalFilter.map((bird) => {
      return (
        <Card
          key={bird.name}
          name={bird.name}
          likes={bird.likes}
          addLike={this.addLike}
          deleteCard={this.deleteCard}
          removeLike={this.removeLike}
        />
      );
    });

    return <div className="background">
    <div className="App">
    <h1>{this.state.birds.length} Birds</h1>
    <input onChange={this.search} stype="text" />
    <div className="row">{animalsList}</div>
    </div>
    </div>;
  }
}

export default Birds;
