"use strict";
class Customer {
    constructor(id, name, email, shippingAddress) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Id: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
    }
}
class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(amount) {
        this.stock -= amount;
    }
    restock(amount) {
        this.stock += amount;
    }
}
class ElectronicsProduct extends Product {
    constructor(id, name, price, stock, warrantyPeriod) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, warranty: ${this.warrantyPeriod}`;
    }
    getShippingCost(distance) {
        return distance * 50000;
    }
    getCategory() {
        return `Electronics Product`;
    }
}
class ClothingProduct extends Product {
    constructor(id, name, price, stock, size, color) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, size: ${this.size}, color: ${this.color}`;
    }
    getShippingCost(distance) {
        return distance * 25000;
    }
    getCategory() {
        return `Clothing Product`;
    }
}
class Order {
    constructor(orderId, customer, totalAmount) {
        this.orderId = orderId;
        this.customer = customer;
        this.totalAmount = totalAmount;
        this.products = [];
    }
    addProductToOrder(product, quantity) {
        this.products.push({ product, quantity });
        this.totalAmount += product.price * quantity;
    }
    getDetails() {
        return `Id: ${this.orderId}, customer: ${this.customer.name}, products: ${this.products
            .map((product) => `${product.product.name} - ${product.quantity}`)
            .join(", ")} totalAmount: ${this.totalAmount}`;
    }
}
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    createOrder(order) {
        this.orders.push(order);
    }
    cancelOrder(orderId) {
        const index = this.orders.findIndex((order) => order.orderId === orderId);
        if (index !== -1) {
            this.orders.splice(index, 1);
        }
    }
    listAvailableProducts() {
        const stockAvailable = this.products.filter((product) => product.stock > 0);
        console.log(stockAvailable);
    }
    listCustomerOrders(customerId) {
        const order = this.orders.filter((order) => order.customer.id === customerId);
        console.log(order);
    }
    calculateTotalRevenue() {
        let sum = 0;
        this.orders.forEach((order) => {
            order.products.forEach((product) => {
                if (product.product.price != null) {
                    sum += product.product.price * product.quantity;
                }
                else {
                    console.log("Giá không có sẵn cho sản phẩm:", product.product.name);
                }
            });
        });
        return sum;
    }
    countProductByCategory() {
        const countByCategory = {};
        for (const category in countByCategory) {
            if (countByCategory.hasOwnProperty(category)) {
                console.log(`${category}: ${countByCategory[category]}`);
            }
        }
        console.log("Thống kê số lượng sản phẩm theo danh mục: ");
        for (const category in countByCategory) {
            if (countByCategory.hasOwnProperty(category)) {
                console.log(`${category}: ${countByCategory[category]}`);
            }
        }
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex((product) => product.id === productId);
        if (index !== -1) {
            this.products[index].stock = newStock;
        }
    }
}
