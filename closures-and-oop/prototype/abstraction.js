function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };

  this.computeOptimumLocation = function () {
    // ...
  };

  this.draw = function () {
    this.computeOptimumLocation();

    console.log('drawing a circle');
  };
}

const circle = new Circle(10);
circle.computeOptimumLocation();
circle.draw();
