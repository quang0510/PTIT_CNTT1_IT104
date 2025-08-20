import React, { Component } from 'react'

type PropTypes = {
  nameChildren: string;
  age: number;
};

export default class Children_Comp extends Component<PropTypes> {
  render() {
    return (
      <div>
        Họ và tên component con
        <h2>UserName: {this.props.nameChildren}</h2>
        <h2>Age: {this.props.age}</h2>
      </div>
    )
  }
}
