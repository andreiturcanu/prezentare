function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('drawing a circle');
  };
}

const circle = new Circle(1);

// Add a property
circle.location = { x: 1, y: 1 };
// computed property names
// Use the bracket notation when accessing dynamically a property name.
circle['location'] = { x: 1 };

const propertyName = 'center location';
// circle.center location
circle[propertyName] = { x: 1 };

// Delete a property
delete circle.location;
