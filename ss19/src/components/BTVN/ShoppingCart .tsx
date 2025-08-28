import React, { useMemo } from "react";

type Cart = {

  id: number;
  name: string;
  price: number;
  quantity: number;

};

export default function ShoppingCart() {

  const cartList = [

    { id: 1, name: " Áo", price: 10000, quantity: 10 },
    { id: 2, name: " Quần", price: 20000, quantity: 20 },
    { id: 3, name: " Giày", price: 30000, quantity: 30 },
  ];


  const totalCart = (): number => {
    return cartList.reduce((current, cart) => {
      return current + cart.price * cart.quantity;
    }, 0);
  };


  const catchTotal = useMemo(() => totalCart, [cartList]);

  return (
    <div >
      {cartList.map((cart: Cart) => (
        <div>
          <span>{cart.id}</span>. <span>{cart.name}</span>: <span>{cart.price}</span>
          {"\n Số lượng "}
          <span>{cart.quantity}</span>
        </div>
      ))}
      <br />
      <span>Tổng tiền {catchTotal().toLocaleString()} VND</span>
    </div>
  );
}