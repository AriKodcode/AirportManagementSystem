import { RegularTicket, VIPticket } from './tickets.js';

export class Flight {
  constructor(
    flight_name,
    airline,
    flight_number,
    maximum_number_of_passengers,
    regular_ticket_price,
    VIP_ticket_price
  ) {
    this.flight_name = flight_name;
    this.airline = airline;
    this.flight_number = flight_number;
    this.maximum_number_of_passengers = maximum_number_of_passengers;
    this.regular_ticket_price = regular_ticket_price;
    this.VIP_ticket_price = VIP_ticket_price;
    this.tickets_list = this.addTicketToList();
  }
  ticketDistribution() {
    if (this.maximum_number_of_passengers % 2 === 0) {
      const availableTickets = {
        regular: Math.floor(this.maximum_number_of_passengers * 0.9),
        VIP: Math.floor(this.maximum_number_of_passengers * 0.1),
      };
      return availableTickets;
    } else {
      const availableTickets = {
        regular: Math.floor(this.maximum_number_of_passengers * 0.9),
        VIP: Math.floor(this.maximum_number_of_passengers * 0.1 + 1),
      };
      return availableTickets;
    }
  }
  addTicketToList() {
    const ticketlist = [];
    const allTickets = this.ticketDistribution();
    for (let i = 0; i < allTickets.VIP; i++) {
      const newTicket = new VIPticket(i + 1, this.VIP_ticket_price, '');
      ticketlist.push(newTicket);
    }
    for (let i = 0; i < allTickets.regular; i++) {
      const newTicket = new RegularTicket(
        i + allTickets.VIP + 1,
        this.regular_ticket_price,
        ''
      );
      ticketlist.push(newTicket);
    }
    return ticketlist;
  }
}
