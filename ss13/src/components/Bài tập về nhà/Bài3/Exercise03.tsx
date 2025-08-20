import React, { Component } from 'react'

type User = {
  id: number;
  name: string;
  age: number;
};


type PropTypes={
    error?: string;
}

type State={
    user: User[]
}

export default class Exercise03 extends Component<PropTypes , State> {
    constructor(props: PropTypes){
        super(props);

        this.state={
            user:[
            {id: 1, name: "John", age: 30},
            {id: 2, name: "Mary", age: 25},
            {id: 3, name: "Jane", age: 20},
            ]
        }
    }
  render() {
  return (
    <div>
      <h3>Danh sách người dùng:</h3>

      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        
        <tbody>
          {this.state.user.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
}
