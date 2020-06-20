import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NovoComponent from './NovoComponent';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      name: "Carolinne",
      email: "carolinne.rodrigues7@hotmail.com"
    }
    this.changeState = this.changeState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeState(){
    this.setState({name:"Carolinne Rodrigues"})
  }
  resetState(){
    this.setState({name:"Carolinne"})
  }
  changeInput(event){
    let target = event.target;
    let index = target.name;

    this.setState({
      [index]:target.value
    })
  }

  render(){
    return (
      <div className="App" style={{ padding:'50px'}}>
        <div>
          <form>
            <label>
              Nome: 
              <input 
                type="text" 
                name="name" 
                value={this.state.name}
                onChange={this.changeInput}
                style={{ marginRight: '15px' }}
              />
              Email: 
              <input 
                type="text" 
                name="email" 
                value={this.state.email}
                onChange={this.changeInput}
              />
            </label>
          </form>
        </div>
        <div style={{ padding:'15px' }}>
          Nome: {this.state.name} <br/> 
          Email:{this.state.email}
        </div>
        <button onClick={this.changeState} style={{ marginRight: '15px' }}> Mudar estado </button>
        <button onClick={this.resetState} > Resetar estado </button>
      </div>
    );
  }
}

export default App;
