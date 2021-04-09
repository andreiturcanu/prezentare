// Functions are objects
const Circle1 = new Function(
  'radius',
  `
  this.radius = radius;
  this.draw = function () {
    console.log('drawing a circle');
  };
`
);

const another = new Circle1(1);
console.log(another);
