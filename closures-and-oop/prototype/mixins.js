const canEat = {
  eat: function () {
    this.hunger--;
    console.log('eating');
  }
};

const canWalk = {
  walk: function () {
    console.log('walking');
  }
};

const canSwim = {
  swim: function () {
    console.log('swimming');
  }
};

function Person() {}

function Fish() {}

Object.assign(Person.prototype, canEat, canWalk);

Object.assign(Fish.prototype, canSwim);

const person = new Person();
const goldFish = new Fish();

console.log(person);
console.log(goldFish);

// make more readable
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// mixin(Fish.prototype, canEat, canSwim);
