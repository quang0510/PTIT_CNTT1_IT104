import React, { Component } from "react";

type StateType = {
  range: string;
  inputValue: string;
};

export default class Bài4 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      range: "",
      inputValue: "",
    };
  }

  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        range: e.target.value,
      });
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>): void => {
      e.preventDefault();

      this.setState({ inputValue: this.state.range });
    };

    return (
      <>
        <div>
          Tiến độ hoàn thành: <span>{this.state.inputValue}%</span>
        </div>
        <input className="input-range" onChange={handleChange} type="range" />
        <div>
          <button onClick={() => handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </>
    );
  }
}