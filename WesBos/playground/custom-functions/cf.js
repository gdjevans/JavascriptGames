// function definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount + (billAmount + taxRate) + (billAmount + tipRate);
  return total;
}

// function call

const myTotal = calculateBill(100, 0.13);

console.log(myTotal);

// console.log(`Your total is ${myTotal}`);

// console.log(`Your total is $${calculateBill()}`);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Glyn');

console.log(greeting);

const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'silly goose') {
  return `HEY ${name.toUpperCase()}`;
}

yell(doctorize('Glyn'));

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
