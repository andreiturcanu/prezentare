// Private Properties and Methods
function Circle(radius) {
  this.radius = radius;

  const defaultLocation = { x: 0, y: 0 };

  const computeOptimumLocation = function () {
    console.log(defaultLocation);
  };

  this.draw = function () {
    computeOptimumLocation();

    console.log('drawing a circle');
  };
}

const circle = new Circle(10);
