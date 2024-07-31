export default class Person {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  message() {
    console.log(`Hello ${this.#name}!`);
  }
}
