import React, { Component } from 'react'

type PropTypes ={
    error?: string;
}

type State ={
    id: number;
    name2: string;
    dateOfBirth: string;
    address : string;
}

export default class Exercise02 extends Component<PropTypes , State> {

    constructor(props: PropTypes){
        super(props);


    this.state ={
        id: 1,
        name2: "quang",
        dateOfBirth: "1/1/9999",
        address: "Ha Noi"     
    }

    }
     
  render() {

    return (
      <>
        <h3>Thông tin cá nhân</h3>
        <p>id: {this.state.id}</p>
        <p>tên: {this.state.name2}</p>
        <p>ngày sinh: {this.state.dateOfBirth}</p>
        <p>địa chỉ: {this.state.address}</p>
      </>
    )
  }
}
