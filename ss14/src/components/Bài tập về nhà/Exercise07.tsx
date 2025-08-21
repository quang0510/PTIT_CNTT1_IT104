import React, { Component } from "react";
import "./Exercise07.css";

type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type StateTypes = {
  account: Account;
  isEmpty: boolean;
};

export default class Exercise07 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      account: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
      isEmpty: false,
    };
  }

  render() {
    const accountList: Account[] = JSON.parse(
      localStorage.getItem("accountList") || "[]"
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      this.setState({
        account: {
          ...this.state.account,
          [name]: value,
        },
        isEmpty: false,
      });
    };

    const { name, email, password, phone } = this.state.account;
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = () => {

      const existed =
        accountList.some((account: Account) => account.email === email) ||
        !check.test(email);

      if (!name || existed || !password || !phone) {
        this.setState({ isEmpty: true });
      }
       else {
        this.setState({ isEmpty: false });

        const newAccount = this.state.account;
        accountList.push(newAccount);
        localStorage.setItem("accountList", JSON.stringify(accountList));

        this.setState({
          account: {
            name: "",
            email: "",
            password: "",
            phone: "",
          },
        });
        alert(" Đăng ký tài khoản thành công ");
      }
    };

    return (
    <>
        <div className="register-container">
        <div className="register-card">
          <h3 className="register-title">Đăng ký tài khoản</h3>
          <form>
            <div className="form-group">
              <label>Tên sinh viên</label>
              <input value={name} onChange={handleChange} type="text" name="name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input value={email} onChange={handleChange} type="email" name="email" />
            </div>

            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                value={password}
                onChange={handleChange}
                type="password"
                name="password"
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input value={phone} onChange={handleChange} type="text" name="phone" />
            </div>
          </form>

          {this.state.isEmpty && (
            <p className="error-msg">
            Dữ liệu không hợp được để trống
            </p>
          )}

          <button onClick={handleSubmit} className="btn-submit">
            Đăng ký
          </button>
        </div>
      </div>
    </>
      
    );
  }
}
