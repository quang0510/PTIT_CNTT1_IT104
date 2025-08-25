// bài 6
import React, { Component } from "react";

type StateType = {
  theme: boolean;
};

export default class ThemeSwitcher extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      theme: true,
    };
  }
  render() {
    const handleChangeTheme = () => {
      this.setState({
        theme: !this.state.theme,
      });
    };
    return (
      <>
        {this.state.theme ? (
          <>
            <div
              style={{
                width: "fit-content",
                padding: "15px",
                backgroundColor: "#fff",
                color: "#000000",
              }}
            >
              <h2>☀️ Chế độ sáng đang bật</h2>
              <button onClick={handleChangeTheme}>Chuyển theme</button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                width: "fit-content",
                padding: "15px",
                backgroundColor: "#000000",
                color: "#fff",
              }}
            >
              <h2>🌙 Chế độ tối đang bật</h2>
              <button onClick={handleChangeTheme}>Chuyển theme</button>
            </div>
          </>
        )}
      </>
    );
  }
}