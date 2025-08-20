import React, { Component } from 'react'
import Children_Comp from './Children_Comp';

type PropTypes={
    error?: string;
}

type State={
    nameParent: string;
}


export default class Parent_Comp extends Component<PropTypes , State> {

    constructor(props: PropTypes){
        super(props);

        this.state={
            nameParent: "Quang"
        }
    }
  render() {
    return (
      <div>
        <h1>Họ và tên component cha: {this.state.nameParent}</h1>
        <Children_Comp age={20} nameChildren={"huy"} />
      </div>
    )
  }
}
