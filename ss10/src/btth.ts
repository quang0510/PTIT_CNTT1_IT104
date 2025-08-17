class Passenger {

  passengerId: number;
  name: string;
  passportNumber: string;

  constructor(id: number, name: string, passportNumber: string) {
    this.passengerId = id;
    this.name = name;
    this.passportNumber = passportNumber;
  }

  getDetails(): string {

    return `Passenger #${this.passengerId} - ${this.name}, Passport: ${this.passportNumber}`;
  }
}

class Flight {

  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  capacity: number;
  bookedSeats: number;

  constructor(flightNumber: string, origin: string, destination: string, departureTime: string, capacity: number) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.destination = destination;
    this.departureTime = departureTime;
    this.capacity = capacity;
    this.bookedSeats = 0;
  }


  bookSeat(): boolean {
    if (this.isFull()){
      return false;
    } 
    this.bookedSeats++;
    return true;
  }

  isFull(): boolean {
    return this.bookedSeats >= this.capacity;
  }

  calculateBaggageFee(weight: number): number {

    return 0;
  }
}

class DomesticFlight extends Flight {

  calculateBaggageFee(weight: number): number {
    return weight * 50000;
  }
}

class InternationalFlight extends Flight {

  calculateBaggageFee(weight: number): number {
    return weight * 10;
  }
}

class Booking {
  bookingId: number;
  passenger: Passenger;
  flight: Flight;
  numberOfTickets: number;
  totalCost: number;

  constructor(id: number, passenger: Passenger, flight: Flight, numberOfTickets: number) {

    this.bookingId = id;
    this.passenger = passenger;
    this.flight = flight;
    this.numberOfTickets = numberOfTickets;
    this.totalCost = numberOfTickets * 200;
  }

  getBookingDetails(): string {

    return `
    Booking ${this.bookingId} - ${this.passenger.name}
    on flight ${this.flight.flightNumber},
    Tickets: ${this.numberOfTickets},
    Total: ${this.totalCost}
    `;
  }
}

class AirlineManager {

  passengers: Passenger[] = [];
  flights: Flight[] = [];
  bookings: Booking[] = [];
  passengerIdCounter: number = 1;
  bookingIdCounter: number = 1;

  addPassenger(name: string, passport: string): void {

    const p = new Passenger(this.passengerIdCounter++, name, passport);
    this.passengers.push(p);
  }

  addFlight(flight: Flight): void {

    this.flights.push(flight);
  }

  createBooking(passengerId: number, flightNumber: string, numberOfTickets: number): Booking | null {

    const passenger = this.passengers.find(p => p.passengerId === passengerId);
    const flight = this.flights.find(f => f.flightNumber === flightNumber);

    if (!passenger || !flight || flight.isFull()){

      return null;
    } 

    for (let i = 0; i < numberOfTickets; i++) {

      if (!flight.bookSeat()) return null;
    }
    const booking = new Booking(this.bookingIdCounter++, passenger, flight, numberOfTickets);
    this.bookings.push(booking);
    return booking;
  }

  cancelBooking(bookingId: number): void {
    this.bookings = this.bookings.filter(b => b.bookingId !== bookingId);
  }
 
  listAvailableFlights(origin: string, dest: string): void {
    const flights = this.flights.filter(f => f.origin === origin && f.destination === dest && !f.isFull());
    console.log("Available flights:", flights.map(f => f.flightNumber));
  }

  listBookingsByPassenger(passengerId: number): void {

    const bookings = this.bookings.filter(b => b.passenger.passengerId === passengerId);
    bookings.forEach(b => console.log(b.getBookingDetails()));
  }

  calculateTotalRevenue(): number {
    return this.bookings.reduce((sum, b) => sum + b.totalCost, 0);
  }

  countFlightsByType(): void {

    let domestic = 0, international = 0;

    for (const a of this.flights) {

      if (a instanceof DomesticFlight){
        domestic++;
      } 
      else if (a instanceof InternationalFlight) international++;
    }
    console.log("Domestic:", domestic, "International:", international);
  }

  updateFlightTime(flightNumber: string, newTime: string): void {
    const flight = this.flights.find(ele => ele.flightNumber === flightNumber);
    
    if (flight){
      flight.departureTime = newTime;
    } 
  }

  getFlightPassengerList(flightNumber: string): void {
    const list = this.bookings.filter(b => b.flight.flightNumber === flightNumber).map(b => b.passenger.name);
    console.log(`Passengers on ${flightNumber}:`, list);
  }

}
const manager = new AirlineManager();
let choice;

do {
  console.log(`
===== MENU =====
1. Thêm hành khách mới
2. Thêm chuyến bay mới
3. Tạo giao dịch đặt vé
4. Hủy giao dịch đặt vé
5. Hiển thị chuyến bay còn trống
6. Hiển thị vé đã đặt của một hành khách
7. Tính tổng doanh thu
8. Đếm số lượng chuyến bay nội địa/quốc tế
9. Cập nhật giờ bay
10. Xem danh sách hành khách của một chuyến bay
11. Thoát
`);

  choice = Number(prompt("Chọn chức năng: "));

  switch (choice) {
    case 1:
      const name = prompt("Tên hành khách: ");
      const passport = prompt("Số hộ chiếu: ");
      manager.addPassenger(name, passport);
      break;
    case 2:
      const type = prompt("Loại (domestic/international): ");
      const flightNumber = prompt("Số hiệu chuyến bay: ");
      const origin = prompt("Điểm đi: ");
      const dest = prompt("Điểm đến: ");
      const time = prompt("Giờ khởi hành: ");
      const cap = Number(prompt("Sức chứa: "));
      const flight = type === "domestic"
        ? new DomesticFlight(flightNumber, origin, dest, time, cap)
        : new InternationalFlight(flightNumber, origin, dest, time, cap);
      manager.addFlight(flight);
      break;
    case 3:
      const id3 = Number(prompt("ID hành khách: "));
      const fnum = prompt("Số hiệu chuyến bay: ");
      const tickets = Number(prompt("Số vé: "));
      const booking = manager.createBooking(id3, fnum, tickets);
      if (booking) console.log("Đặt vé thành công:", booking.getBookingDetails());
      else console.log("Đặt vé thất bại!");
      break;
    case 4:
      const id4 = Number(prompt("ID booking cần hủy: "));
      manager.cancelBooking(id4);
      console.log("Đã hủy booking!");
      break;
    case 5:
      const start = prompt("Điểm đi: ");
      const end = prompt("Điểm đến: ");
      manager.listAvailableFlights(start, end);
      break;
    case 6:
      const id6 = Number(prompt("ID hành khách: "));
      manager.listBookingsByPassenger(id6);
      break;
    case 7:
      console.log("Doanh thu:", manager.calculateTotalRevenue());
      break;
    case 8:
      manager.countFlightsByType();
      break;
    case 9:
      const num9 = prompt("Số hiệu chuyến bay: ");
      const time9 = prompt("Giờ mới: ");
      manager.updateFlightTime(num9, time9);
      console.log("Đã cập nhật giờ bay ");
      break;
    case 10:
      const num10 = prompt("Số hiệu chuyến bay: ");
      manager.getFlightPassengerList(num10);
      break;
    case 11:
      console.log("Thoát chương trình ");
      break;
  }
} while (choice !== 11);


