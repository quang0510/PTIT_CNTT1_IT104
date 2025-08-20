import React, { Component } from "react";

type PropTypes = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default class ChildrentComponent extends Component<PropTypes> {
  render() {

    return (
      <>
        <h3>Dữ liệu trong component con: </h3>

          <div>Id: {this.props.id}</div>
          <div>Name: {this.props.name}</div>
          <div>Price: {this.props.price.toLocaleString()} đ</div>
          <div>Quantity: {this.props.quantity}</div>
          
      </>
    );
  }
}