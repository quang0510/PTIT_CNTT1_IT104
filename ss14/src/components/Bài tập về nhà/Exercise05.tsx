import React, { Component } from "react";
import "./Exercise05.css"; 

type State = {

  productCode: string;
  productName: string;
  price: number;
  quantity: number;
};

export default class Exercise05 extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 0,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;
    this.setState({

      ...this.state,
      [name]: value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    console.log("Product object:", this.state);
  };

  render() {
    return (
    <>
        <div className="form-container">
        <h2 className="form-title">Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit} className="form-box">
          <div className="form-group">
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn-submit">Đăng ký</button>
        </form>
      </div>
    </>
      
    );
  }
}
