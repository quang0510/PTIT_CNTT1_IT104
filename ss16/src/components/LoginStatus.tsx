// bài 2
import React, { Component } from "react";

type StateType = {
  isLoggin: boolean;
  btnStatus: string;
};

export default class LoginStatus extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoggin: false,
      btnStatus: "Đăng nhập",
    };
  }
  render() {
    const handleLoggin = () => {
      this.setState({
        isLoggin: !this.state.isLoggin,
        btnStatus: this.state.isLoggin ? "Đăng xuất" : "Đăng nhập",
      });
    };
    return (
      <div
        style={{
          border: "1px solid #f0f8ff",
          backgroundColor: "#f0f8ff",
          padding: "10px",
          borderRadius: "14px",
        }}
      >
        {this.state.isLoggin ? (
          <>
            <h2>Vui lòng đăng nhập để tiếp tục</h2>
          </>
        ) : (
          <>
            <h2>Xin chào, User</h2>
          </>
        )}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1976d2",
            color: "#fff",
          }}
          onClick={handleLoggin}
        >
          {this.state.btnStatus}
        </button>
      </div>
    );
  }
}