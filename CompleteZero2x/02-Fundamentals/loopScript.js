// console.log('Lifting weights repetition 1 ');
// console.log('Lifting weights repetition 2 ');
// console.log('Lifting weights repetition 3 ');

// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} `);
}

const jonas = {
    firstName: 'Jonas',
    lastnNme: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

const types = [];

for(let i = 0; i < jonas.length; i++) {
    // Reading froom jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling in array
    //types[i] = typeof jonas[i];
    // or...
    types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break
console.log('----ONLY STRINGS----');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
    console.log(jonas[i], typeof jonas[i]);

}

console.log('----BREAK AT NUMBER----');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
    console.log(jonas[i], typeof jonas[i]);
}

// Looping in reverse
for(let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`---------STARTING EXERCISE ${exercise}`);
    for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} Lifting weights repitition ${rep}`);
    }
}

//While Loop
let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('6 has been reached. Loop is about to end...');
}

const bills = [22, 295, 176, 4440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];

    }
    return sum / arr.length;
}

console.log(calcAverage(totals));