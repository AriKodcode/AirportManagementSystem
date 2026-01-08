import { Flight } from './flight.js';
const a11 = new Flight('a11', 'elal', 'ly123', 20, 350, 800);
const b22 = new Flight('b22', 'delta', 'us432', 30, 550, 1200);
const c33 = new Flight('c33', 'brithish', 'uk968', 40, 450, 900);
export class Airport {
  constructor() {
    this.fligths = [a11, b22, c33];
  }
}
