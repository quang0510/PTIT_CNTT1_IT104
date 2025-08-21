import React, { Component } from 'react'


type State = {
  userName: string;
};


export default class Exersice01 extends Component<object , State> {
    constructor(props: object){
        super(props);

        this.state={
            userName: "quang"
        }
    }

    componentDidMount() {
        console.log("tên người dùng trong state là:", this.state.userName);

  }
  render() {
    return (
      <>
        <h3>xin chào {this.state.userName}</h3>
      </>
    )
  }
}
