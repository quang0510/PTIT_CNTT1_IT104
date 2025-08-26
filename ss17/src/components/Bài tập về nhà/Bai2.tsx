import React, { useState } from 'react'

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Bai2() {

    const [product , setProduct] = useState<Product> ({
        id: 1,
        name: "Iphone",
        price: 35000000,
        quantity: 10,
    });
    
  return (
    <div>
        <h3>Thông tin sản phẩm</h3>
        <p>id : {product.id}</p>
        <p>name : {product.name}</p>
        <p>price : {product.price}</p>
        <p>quantity : {product.quantity}</p>

    </div>
  )
}
