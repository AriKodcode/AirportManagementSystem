import { Airport } from './classes/airport.js';
import { RegularPassenger, StudentPassenger } from './classes/passengers.js';

const benGuryon = new Airport();
console.log(benGuryon);
console.log(benGuryon.fligths[0]);
console.log(benGuryon.fligths[1]);
const student = new StudentPassenger('ari', 212, 1000, 'kodcode');
const passanger = new RegularPassenger('meir', 1234, 2000, 'kodcode', true);

passanger.buyTicket(benGuryon.fligths[1], 'regular');

student.buyTicket(benGuryon.fligths[0], 'VIP');
console.log(benGuryon.fligths[0]);
console.log(benGuryon.fligths[1]);
console.log(student);
console.log(passanger);
