"use strict";
const calculateOrderTotal = (order) => {
    return order.product.price * order.quantity;
};
const printOrder = (order) => {
    order.forEach(element => {
        console.log(`Don hang : ${element.orderId}`);
        console.log(`Khach hang : ${element.customerName}`);
        const orderItem = [...element.items];
        console.log(`San pham : `);
        let total = 0;
        orderItem.forEach(element => {
            console.log(`- ${element.product.name} x ${element.quantity} -> ${calculateOrderTotal(element)}`);
            total += calculateOrderTotal(element);
        });
        console.log(`Tong cong : ${total}`);
        console.log(`Ghi chu : ${element.note}`);
    });
};
const order = [
    {
        orderId: `#1`,
        customerName: `quang`,
        items: [
            {
                product: {
                    id: `A1`,
                    name: `Ao `,
                    price: 100
                },
                quantity: 2
            },
            {
                product: {
                    id: `Q2`,
                    name: `Quan`,
                    price: 200
                },
                quantity: 1
            }
        ],
        note: `Giao sau 18h`
    },
];
printOrder(order);
