class Customer {
  id?: number;
  name?: string;
  email?: string;
  shippingAddress?: string;

  constructor(id: number, name: string, email: string, shippingAddress: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
  }

  getDetails() {
    return `Id: ${this.id}, Name: ${this.name}, Email: ${this.email}, Address: ${this.shippingAddress}`;
  }
}

abstract class Product {
  id?: number;
  name?: string;
  price?: number;
  stock?: number;

  constructor(id: number, name: string, price: number, stock: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  sell(amount: number): void {
    this.stock -= amount;
  }

  restock(amount: number): void {
    this.stock += amount;
  }

  abstract getProductInfo(): string;
  abstract getShippingCost(distance: number): number;
  abstract getCategory(): string;
}

class ElectronicsProduct extends Product {
  warrantyPeriod: number;

  constructor(id: number, name: string, price: number, stock: number, warrantyPeriod: number) {
    super(id, name, price, stock);
    this.warrantyPeriod = warrantyPeriod;
  }

  getProductInfo() {
    return `id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, warranty: ${this.warrantyPeriod}`;
  }

  getShippingCost(distance: number): number {
    return distance * 50000;
  }

  getCategory(): string {
    return `Electronics Product`;
  }
}

class ClothingProduct extends Product {
  size: number;
  color: string;

  constructor(id: number, name: string, price: number, stock: number, size: number, color: string) {
    super(id, name, price, stock);
    this.size = size;
    this.color = color;
  }

  getProductInfo() {
    return `id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, size: ${this.size}, color: ${this.color}`;
  }

  getShippingCost(distance: number): number {
    return distance * 25000;
  }

  getCategory(): string {
    return `Clothing Product`;
  }
}

class Order {
  orderId: number;
  customer: Customer;
  products: { product: Product; quantity: number }[];
  totalAmount: number;

  constructor(orderId: number, customer: Customer, totalAmount: number) {
    this.orderId = orderId;
    this.customer = customer;
    this.totalAmount = totalAmount;
    this.products = [];
  }

  addProductToOrder(product: Product, quantity: number) {
    this.products.push({ product, quantity });
    this.totalAmount += product.price! * quantity;
  }

  getDetails() {
    return `Id: ${this.orderId}, customer: ${this.customer.name}, products: ${this.products
      .map((product) => `${product.product.name} - ${product.quantity}`)
      .join(", ")} totalAmount: ${this.totalAmount}`;
  }
}

class Store {
  products: Product[] = [];
  customers: Customer[] = [];
  orders: Order[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  addCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  createOrder(order: Order) {
    this.orders.push(order);
  }

  cancelOrder(orderId: number) {
    const index = this.orders.findIndex((order) => order.orderId === orderId);
    if (index !== -1) {
      this.orders.splice(index, 1);
    }
  }

  listAvailableProducts() {
    const stockAvailable = this.products.filter((product) => product.stock! > 0);
    console.log(stockAvailable);
  }

  listCustomerOrders(customerId: number) {
    const order = this.orders.filter((order) => order.customer.id === customerId);
    console.log(order);
  }

    calculateTotalRevenue() {
    let sum = 0;

  this.orders.forEach((order) => {

    order.products.forEach((product) => {

      if (product.product.price != null) {

        sum += product.product.price * product.quantity;
      } else {
        console.log("Giá không có sẵn cho sản phẩm:", product.product.name);
      }
    });
  });

  return sum;
    }

  countProductByCategory() {
    const countByCategory: Record<string, number> = {};

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

  updateProductStock(productId: number, newStock: number) {
    const index = this.products.findIndex((product) => product.id === productId);
    if (index !== -1) {
      this.products[index].stock = newStock;
    }
  }
}
