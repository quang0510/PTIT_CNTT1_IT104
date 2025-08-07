"use strict";
const listProduct = [
    {
        id: "1",
        name: "Áo sơ mi",
        price: 300,
        category: {
            id: "1",
            name: "Thời trang nam"
        },
        discount: 0.05
    },
    {
        id: "2",
        name: "Quần",
        price: 400,
        category: {
            id: "1",
            name: "Thời trang nam"
        },
    },
    {
        id: "3",
        name: "Váy",
        price: 500,
        category: {
            id: "2",
            name: "Thời trang nữ"
        },
    }
];
const getFinalPrice = (product) => {
    if (!product.discount) {
        return product.price;
    }
    return product.price - (product.price * product.discount);
};
const printProductInfo = (listProduct) => {
    listProduct.forEach(element => {
        console.log(`ten : ${element.name}`);
        console.log(`gia goc : ${element.price}`);
        console.log(`Gia sau giam : ${getFinalPrice(element)}`);
        console.log(`danh muc : ${element.category.name}`);
    });
};
printProductInfo(listProduct);
