import React, { Component } from "react";
import "./Exercise06.css";

type State = {
  gender: string;
};

export default class Exercise06 extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      gender: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Giới tính bạn chọn là: " + this.state.gender);
  };

  render() {
    return (
        <>

      <div className="form-container">
        <h2 className="form-title">Chọn giới tính</h2>
        <form onSubmit={this.handleSubmit} className="form-box">
          <div className="form-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                checked={this.state.gender === "Nam"}
                onChange={this.handleChange}
              />
              Nam
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nữ"
                checked={this.state.gender === "Nữ"}
                onChange={this.handleChange}
              />
              Nữ
            </label>
          </div>

          <div className="form-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="Khác"
                checked={this.state.gender === "Khác"}
                onChange={this.handleChange}
              />
              Khác
            </label>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>

        {this.state.gender ? <p className="result">Giới tính bạn chọn: {this.state.gender}</p> : null}

      </div>
        </>
    );
  }
}
