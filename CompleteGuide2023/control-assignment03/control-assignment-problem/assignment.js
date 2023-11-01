// let rndNumbers = [];
// let finished = false;
// while (!finished) {
//     const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//     rndNumbers.push(randomNumber);
//     if (randomNumber > 0.5) {
//         finished = true;
//         console.log(rndNumbers);
//     }
// }

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
    alert('Greater or equal than 0.7.');
} else {
    alert('Not greater than 0.7');
}


let numArray = [2, 5, 28, 99, 51];

for(let i = numArray.length; i >= 0; i--) {
    console.log(numArray[i]);
}

let j = 0;
while (numArray[j]) {
    console.log(numArray[j]);
    j++
} 

// let nextRndNumbers = [];
// let hasFinished = false;
// while (!hasFinished) {
//     const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
//     nextRndNumbers.push(randomNumber);
//     if (randomNumber > 0.7) {
//         hasFinished = true;
//         console.log(nextRndNumbers);
//     }
//     if (randomNumber < 0.2) {
//         hasFinished = true;
//         console.log(nextRndNumbers);
//     }
// }

const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber <= 0.2 || randomNumber2 <= 2) {
    alert('Greater than 0.7 or smaller than 2');
} 