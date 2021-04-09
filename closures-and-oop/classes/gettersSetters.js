class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid radius!');

    this._radius = value;
  }
}

const circle = new Circle(10);
circle.radius = 15;
console.log(circle.radius);

// -------------------------- BONUS -------------------

// ES2021 private methods/properties
class HelloWorld {
  #sayHello() {
    return 'hello';
  }

  #sayWorld() {
    return 'world';
  }

  greetTheWorld() {
    console.log(`${this.#sayHello()} ${this.#sayWorld()}`);
  }
}

const program = new HelloWorld();
