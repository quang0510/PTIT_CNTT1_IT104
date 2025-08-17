"use strict";
class Passenger {
    constructor(id, name, passportNumber) {
        this.passengerId = id;
        this.name = name;
        this.passportNumber = passportNumber;
    }
    getDetails() {
        return `Passenger #${this.passengerId} - ${this.name}, Passport: ${this.passportNumber}`;
    }
}
class Flight {
    constructor(flightNumber, origin, destination, departureTime, capacity) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.bookedSeats = 0;
    }
    bookSeat() {
        if (this.isFull()) {
            return false;
        }
        this.bookedSeats++;
        return true;
    }
    isFull() {
        return this.bookedSeats >= this.capacity;
    }
    calculateBaggageFee(weight) {
        return 0;
    }
}
class DomesticFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 50000;
    }
}
class InternationalFlight extends Flight {
    calculateBaggageFee(weight) {
        return weight * 10;
    }
}
class Booking {
    constructor(id, passenger, flight, numberOfTickets) {
        this.bookingId = id;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * 200;
    }
    getBookingDetails() {
        return `
    Booking ${this.bookingId} - ${this.passenger.name}
    on flight ${this.flight.flightNumber},
    Tickets: ${this.numberOfTickets},
    Total: ${this.totalCost}
    `;
    }
}
class AirlineManager {
    constructor() {
        this.passengers = [];
        this.flights = [];
        this.bookings = [];
        this.passengerIdCounter = 1;
        this.bookingIdCounter = 1;
    }
    addPassenger(name, passport) {
        const p = new Passenger(this.passengerIdCounter++, name, passport);
        this.passengers.push(p);
    }
    addFlight(flight) {
        this.flights.push(flight);
    }
    createBooking(passengerId, flightNumber, numberOfTickets) {
        const passenger = this.passengers.find(p => p.passengerId === passengerId);
        const flight = this.flights.find(f => f.flightNumber === flightNumber);
        if (!passenger || !flight || flight.isFull()) {
            return null;
        }
        for (let i = 0; i < numberOfTickets; i++) {
            if (!flight.bookSeat())
                return null;
        }
        const booking = new Booking(this.bookingIdCounter++, passenger, flight, numberOfTickets);
        this.bookings.push(booking);
        return booking;
    }
    cancelBooking(bookingId) {
        this.bookings = this.bookings.filter(b => b.bookingId !== bookingId);
    }
    listAvailableFlights(origin, dest) {
        const flights = this.flights.filter(f => f.origin === origin && f.destination === dest && !f.isFull());
        console.log("Available flights:", flights.map(f => f.flightNumber));
    }
    listBookingsByPassenger(passengerId) {
        const bookings = this.bookings.filter(b => b.passenger.passengerId === passengerId);
        bookings.forEach(b => console.log(b.getBookingDetails()));
    }
    calculateTotalRevenue() {
        return this.bookings.reduce((sum, b) => sum + b.totalCost, 0);
    }
    countFlightsByType() {
        let domestic = 0, international = 0;
        for (const a of this.flights) {
            if (a instanceof DomesticFlight) {
                domestic++;
            }
            else if (a instanceof InternationalFlight)
                international++;
        }
        console.log("Domestic:", domestic, "International:", international);
    }
    updateFlightTime(flightNumber, newTime) {
        const flight = this.flights.find(ele => ele.flightNumber === flightNumber);
        if (flight) {
            flight.departureTime = newTime;
        }
    }
    getFlightPassengerList(flightNumber) {
        const list = this.bookings.filter(b => b.flight.flightNumber === flightNumber).map(b => b.passenger.name);
        console.log(`Passengers on ${flightNumber}:`, list);
    }
}
