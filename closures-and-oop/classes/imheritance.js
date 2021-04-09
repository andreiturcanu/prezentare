class Shape {
  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  draw() {
    console.log('draw');
  }
}

const c = new Circle();

// Calling super()
class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('red', 10);
