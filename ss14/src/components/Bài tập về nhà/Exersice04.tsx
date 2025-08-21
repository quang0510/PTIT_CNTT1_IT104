import React, { Component } from 'react'

type State = {
  text: string;
};

export default class Exercise04 extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      text: "Học code để đi làm"
    };
  }

  changetext = () => {

    this.setState({
      text: "Học code sẽ thành công. Cố lên"
    });
  }

  render() {
    return (
      <>
        <h3>{this.state.text}</h3>
        <button onClick={this.changetext}>Change state</button>
      </>
    )
  }
}
