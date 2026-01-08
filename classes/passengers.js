class Passenger {
  constructor(name, id_number, amount_of_money) {
    this.name = name;
    this.id_number = id_number;
    this.amount_of_money = amount_of_money;
  }
}

export class StudentPassenger extends Passenger {
  constructor(name, id_number, amount_of_money, school_or_university_name) {
    super(name, id_number, amount_of_money);
    this.school_or_university_name = school_or_university_name;
  }
  buyTicket(flight, type_of_ticket) {
    if (type_of_ticket === 'regular') {
      if (this.amount_of_money >= flight.regular_ticket_price * 0.9) {
        for (let ticket of flight.tickets_list) {
          const len = Object.keys(ticket);
          if (len.length === 3) {
            if (ticket.owner_name === '') {
              ticket.owner_name = this.name;
              this.amount_of_money -= ticket.price * 0.9;
              return 'You successfully bought a ticket';
            }
          }
        }
        return 'Tickets are out.';
      } else {
        return false;
      }
    } else if (type_of_ticket === 'VIP') {
      if (this.amount_of_money >= flight.VIP_ticket_price) {
        for (let ticket of flight.tickets_list) {
          const len = Object.keys(ticket);
          if (len.length === 4) {
            if (ticket.owner_name === '') {
              ticket.owner_name = this.name;
              this.amount_of_money -= ticket.price;
              return 'You successfully bought a ticket';
            }
          }
        }
        return 'Tickets are out.';
      }
      return false;
    } else return 'enter only regular or VIP';
  }
}

export class RegularPassenger extends Passenger {
  constructor(
    name,
    id_number,
    amount_of_money,
    workplace,
    knows_an_airport_employe
  ) {
    super(name, id_number, amount_of_money);
    this.workplace = workplace;
    this.knows_an_airport_employe = knows_an_airport_employe;
  }
  buyTicket(flight, type_of_ticket) {
    if (this.knows_an_airport_employe === true) {
      if (type_of_ticket === 'regular') {
        if (this.amount_of_money >= flight.regular_ticket_price * 0.8) {
          for (let ticket of flight.tickets_list) {
            const len = Object.keys(ticket);
            if (len.length === 3) {
              if (ticket.owner_name === '') {
                ticket.owner_name = this.name;
                this.amount_of_money -= ticket.price * 0.8;
                return 'You successfully bought a ticket';
              }
            }
          }
          return 'Tickets are out.';
        }
        return false;
      } else if (type_of_ticket === 'VIP') {
        if (this.amount_of_money >= flight.regular_ticket_price * 0.85) {
          for (let ticket of flight.tickets_list) {
            const len = Object.keys(ticket);
            if (len.length === 4) {
              if (ticket.owner_name === '') {
                ticket.owner_name = this.name;
                this.amount_of_money -= ticket.price * 0.85;
                return 'You successfully bought a ticket';
              }
            }
          }
          return 'Tickets are out.';
        }
        return false;
      } else return 'enter only regular or VIP';
    } else {
      if (type_of_ticket === 'regular') {
        if (this.amount_of_money >= flight.regular_ticket_price) {
          for (let ticket of flight.tickets_list) {
            const len = Object.keys(ticket);
            if (len.length === 3) {
              if (ticket.owner_name === '') {
                ticket.owner_name = this.name;
                this.amount_of_money -= ticket.price;
                return 'You successfully bought a ticket';
              }
            }
          }
          return 'Tickets are out.';
        }
        return false;
      } else if (type_of_ticket === 'VIP') {
        if (this.amount_of_money >= flight.regular_ticket_price) {
          for (let ticket of flight.tickets_list) {
            const len = Object.keys(ticket);
            if (len.length === 4) {
              if (ticket.owner_name === '') {
                ticket.owner_name = this.name;
                this.amount_of_money -= ticket.price;
                return 'You successfully bought a ticket';
              }
            }
          }
          return 'Tickets are out.';
        }
        return false;
      } else return 'enter only regular or VIP';
    }
  }
}
