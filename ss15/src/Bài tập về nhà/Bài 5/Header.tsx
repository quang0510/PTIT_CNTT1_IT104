import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Quản lý sinh viên</h1>
        <button>Thêm mới sinh viên</button>
      </div>
    );
  }
}