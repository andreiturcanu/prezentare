function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius, color) {
  // Calling the super constructor
  Shape.call(this, color);

  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
  console.log('drawing a circle');
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

const c1 = new Circle(10, 'red');
