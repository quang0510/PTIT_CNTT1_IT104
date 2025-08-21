import React, { Component } from "react";
import "./Exercise08.css";

type Account = {
  email: string;
  password: string;
};

type StateTypes = {
  account: Account;
  errorMsg: string;
};

export default class Exercise08 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      account: {
        email: "",
        password: "",
      },
      errorMsg: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({
      account: { ...this.state.account, [name]: value },
      errorMsg: "",
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state.account;

    if (!email || !password) {
      this.setState({ errorMsg: "Email và mật khẩu không được để trống" });
      return;
    }

    const accountList: Account[] = JSON.parse(
      localStorage.getItem("accountList") || "[]"
    );

    const existed = accountList.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (existed) {

      alert("Đăng nhập thành công");
      this.setState({

        account: { email: "", password: "" },
        errorMsg: "",
      });
    } else {
      this.setState({ errorMsg: "sai Email hoặc mật khẩu" });
    }
  };

  render() {
    const { email, password } = this.state.account;

    return (
      <div className="login-container">
        <div className="login-card">
          <h3 className="login-title">Đăng nhập tài khoản</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>

          {this.state.errorMsg ? (<p className="error-msg">{this.state.errorMsg}</p>) : null}

          <button className="btn-submit" onClick={this.handleSubmit}>
            Đăng nhập
          </button>
        </div>
      </div>
    );
  }
}
