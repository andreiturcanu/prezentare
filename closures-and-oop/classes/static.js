class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {
    console.log('draw circle');
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;

    return new Circle(radius);
  }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
