import './App.css';
import "./Card.jsx"
import {animals} from "./animals.js"
import React, {Component} from "react";
import Card from './Card.jsx';

class App extends Component {
  state={
    animals: animals,
  }

  addLike = (e) =>{
    console.log(e)
    this.setState({})
  }

  render(){
    const animalsList = animals.map((animal) => {
      return <Card key={animal.name} name={animal.name} likes={animal.likes} click={this.addLike}/>
    })
    

    return <div className='row'>
      {animalsList}
      </div>
    
  }
}

export default App;
