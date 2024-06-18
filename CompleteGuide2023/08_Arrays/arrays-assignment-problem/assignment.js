// Question 1
const numbers = [1,2,3,4,5,6];
const numsGreater5 = numbers.filter((val) => val > 5);
console.log(numsGreater5);

const mapNumbers = numbers.map(val => ({num: val}));
console.log(mapNumbers);

const multiplication = numbers.reduce((curResult, curValue) =>  curResult * curValue, 1);
console.log(multiplication);

// Question 2

function findMax(...nums) {
    let curMax = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
    }
    return curMax;
}
 
console.log(findMax(...numbers));

// Question 3

function findMinMax(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}
 
const [min, max] = findMinMax(...numbers);

console.log(min, max);

// Question 4

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
