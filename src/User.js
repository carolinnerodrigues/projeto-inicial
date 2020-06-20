import React, { Component } from 'react'

class User extends Component {
    render(){
        return (
            <div>
                <div className="App">
                    Nome: {this.props.name}
                </div>
                <div className="App">
                    Foto: <img src={this.props.photo} />
                </div>
            </div>
          
        )
    }
}

export default User;
