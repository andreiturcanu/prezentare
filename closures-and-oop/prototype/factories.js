// Factory Function
function createCircle(radius) {
  return {
    radius,
    location: { x: 1, y: 1 },
    draw() {
      console.log('drawing a circle');
    }
  };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
const circle3 = createCircle(3);
