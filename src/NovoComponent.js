import React, { Component } from 'react'
import User from './User'
import userIcon from './user_icon.png'

class NovoComponent extends Component {
  render() {
      return (
          <div>
              <User name="Carolinne Rodrigues" photo={userIcon}/>
          </div>
      );
    }  
}

export default NovoComponent;
