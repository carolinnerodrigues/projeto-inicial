import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NovoComponent from './NovoComponent';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: "Carolinne"
    }
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  changeState(){
    this.setState({name:"Carolinne Rodrigues"})
  }
  resetState(){
    this.setState({name:"Carolinne"})
  }

  render(){
    return (
      <div className="App">
        <div>{this.state.name}</div>
        <button onClick={this.changeState} > Mudar estado </button>
        <button onClick={this.resetState} > Resetar estado </button>
      </div>
    );
  }
}

export default App;
