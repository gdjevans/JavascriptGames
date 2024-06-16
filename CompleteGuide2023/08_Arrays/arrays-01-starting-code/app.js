const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = new Array('Hi', 'Welcome');
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll('li');
console.log(listItems);

const moreNumbers = Array.from('Hi!');
console.log(moreNumbers);

const arrayListItems = Array.from(listItems);
copnsole.log(arrayListItems);

// Accepted Data in Arrays
const hobbies = ['Cooking', 'Sports'];
const personalData = [30, 'Max', {moreDetail: []}];
const analyticsData = [[1.6, 1], [-5.4, 2.1]];

for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint);
    }
}

// Find name in data
console.log(personalData[1]);