import React, { Component } from "react";

type PropTypes = {
  error?: string;
};

type StateTypes = {
  name1: string;
};

export default class Exercise01 extends Component<PropTypes, StateTypes> {

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      name1: "Nguyen dang quang",
    };
  }

  render() {
    return (
      <div >
        <h2>
        Họ và tên: {this.state.name1}

        </h2>
      </div>
    );
  }
}