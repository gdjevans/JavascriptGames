// function definition
function calculateBill() {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = 100 * 1.13;
  console.log(total);
  return total;
}

// functionm call

const myTotal = calculateBill();
console.log(`Your total is ${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
