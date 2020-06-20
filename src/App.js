import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';
import './App.css';

class App extends Component{

  render(){
    return (
      <div>
        <div className="App">
          <Link to="/" style={{ marginRight:'15px'}}>Home</Link>
          <Link to="/user">User</Link>
        </div>
        {
          routesConfig.map((value, key) => {
            return (
              <Route
                key={key}
                path={value.path}
                component={value.component}
                exact={value.exact}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
