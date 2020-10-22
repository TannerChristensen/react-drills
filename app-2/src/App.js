import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(){
    super;

    this.state = {
      favFood: ['Chineese', 'Italian', 'Mexican', 'Spanish', 'Greek']
    }
  }

  render(){
    let myFavFoods = this.state.favFood.map (() => {.
      return <h2 key={index}>{element}</h2>;
    })
  }
}
export default App;
