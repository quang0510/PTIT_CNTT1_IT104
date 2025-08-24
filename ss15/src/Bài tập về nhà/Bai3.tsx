import React, { Component } from "react";

type StateType = {
  date: string;
  inputValue: string;
};

export default class Bai3 extends Component<object,StateType> {

  constructor(props: object) {
    super(props);

    this.state = {
      date: "",
      inputValue: "",
    };
  }

  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        date: e.target.value,
      });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      this.setState({ inputValue: this.state.date });
    };

    return (
      <>
        <div>
          Ngày sinh: <span>{this.state.inputValue}</span>
        </div>
        <input onChange={handleChange} type="date" />
        <div>
          <button onClick={() => handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </>
    );
  }
}