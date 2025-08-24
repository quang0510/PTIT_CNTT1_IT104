import React, { Component } from "react";

type StateType = {
  color: string;
  submittedColor: string;
};

export default class Bài2 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      color: "#000000",
      submittedColor: ""
    };
  }

  render() {
    
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
    };

  const  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

    return (
      <div>
        <h3>
          Color: {this.state.submittedColor ? this.state.submittedColor : ""}
        </h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="colorInput">Màu sắc</label>
          <br />
          <input
            type="color"
            id="colorInput"
            value={this.state.color}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
