// Global Scope
function lookupStudent(studentID) {
  // Function scope
  const students = [
    { id: 10, name: 'John' },
    { id: 75, name: 'Jane' },
    { id: 24, name: 'Sarah' }
  ];

  return function greetStudent(greeting) {
    // Function scope
    const student = students.find(student => student.id === studentID);

    return `${greeting}, ${student.name}`;
  };
}

const chosenStudents = [lookupStudent(24), lookupStudent(10)];

chosenStudents[0]('Hello');
// Hello, Sarah
chosenStudents[1]('Howdy');
// Howdy, John

// -----------------
function adder(num1) {
  return function addTo(num2) {
    return num1 + num2;
  };
}

const add10To = adder(10);
const add42To = adder(42);

add10To(15); // 25
add42To(9); // 51

// ----------------------------
function say(myName) {
  const greeting = 'hello';

  function output() {
    console.log(`${greeting}, ${myName}`);
  }

  output();
}

say('John'); // hello, John
