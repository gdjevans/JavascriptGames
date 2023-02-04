// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// const { isInferTypeNode, isExpressionStatement } = require('typescript');

// Anon function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// }

/* eslint-disable */
// const inchToCM = inches => inches * 2.54; 

// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

// function add(a, b = 3) {
//     return a + b;
// }

// const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: '${first} ${last}',
//         age: 0
//     }
//     return baby;
// }

// const makeABaby = (first, last) => ({ name: '${first} ${last}', age: 0 });

// IIFE 
// Immediately Invoked Function Expression
// (function() {
//     console.log('Running the Anon function');
//     return 'You are cool';
// })();

// Methods

const wes = {
    name: 'Wes Bos',
    // Method
    sayHi: function() {
        console.log('Hey Wes');
        return 'Hey Wes';
    },
    // Short hand method
    yellHi() {
        console.log('HEY WESSSS');
    },
    // Arrow function
    whisperHi: () => {
        console.log('hi wes');
    }
}

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Clicking!!');
}

// button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
    console.log('Nice job');
});


//Timer callback
setTimeout(function() {
    console.log('DONE! Time to eat!');
}, 1000);


