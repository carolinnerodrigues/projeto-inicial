import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {

  render() {
    let list = [
        {
            name: "Carolinne",
            email: "carolinne.rodrigues7@hotmail.com"
        },
        {
            name: "João",
            email: "joao@hotmail.com"
        }     
    ]

    return (
        <div>
            <UserForm />
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                {list.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.email}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
  }  
}

export default User;
