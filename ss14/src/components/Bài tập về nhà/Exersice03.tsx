import React, { Component } from 'react'

type State = {
  company: string;
};

export default class Exersice03 extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      company: "Rikkei Academy"
    };
  }

  changeCompany = () => {

    this.setState({
      company: "Rikkei Soft"

    });
  }

  render() {

    return (
      <>
        <h1>Company: {this.state.company}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </>
    )
  }
}
