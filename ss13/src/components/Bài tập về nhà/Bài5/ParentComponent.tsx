import React, { Component } from "react";
import ChildrentComponent from "./ChildrentComponent";

export default class ParentComponent extends Component {
  render() {
    const product = { id: 1, name: "cơm", price: 50000, quantity: 999 };
    return (
      <div>
        <ChildrentComponent {...product} />
      </div>
    );
  }
}