export default class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  message() {
    let t;
    t = 10;
    t = '';
    console.log(`Hello ${this.#name}!`);
  }
}
