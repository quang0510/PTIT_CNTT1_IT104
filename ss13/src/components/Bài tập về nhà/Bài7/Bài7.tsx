import React, { Component } from "react";

type StateType = {
  theme: string;
  language: string;
};

export default class Bài7 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      language: "vietnamese",
      theme: "light",
    };
  }
  render() {
    return (
      <>
        {this.state.theme === "light" && this.state.language === "english" ? (
          <div
            style={{
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #dadada",
            }}
          >
            <h3>Nền: {"Sáng"}</h3>
            <h3>Ngôn ngữ: {"Tiếng Anh"}</h3>
          </div>
        ) : (
          <div
            style={{
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #dadada",
            }}
          >
            <h3>Nền: {"Tối"}</h3>
            <h3>Ngôn ngữ: {"Tiếng Việt"}</h3>
          </div>
        )}
      </>
    );
  }
}