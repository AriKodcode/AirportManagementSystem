class Ticket {
  constructor(price, owner_name) {
    this.price = price;
    this.owner_name = owner_name;
  }
}

export class RegularTicket extends Ticket {
  constructor(random_ticket_number, price, owner_name) {
    super(price, owner_name);
    this.random_ticket_number = random_ticket_number;
  }
}

export class VIPticket extends Ticket {
  constructor(ticket_number, price, owner_name) {
    super(price, owner_name);
    this.ticket_number = ticket_number;
    this.benefits = ['free alcohol', 'free food', ' hot towels'];
  }
}
