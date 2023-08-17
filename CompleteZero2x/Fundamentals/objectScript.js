// Array structure
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//Object structure
const jonas = {
    firstName: 'Jonas',
    lastnNme: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' = nameKey]);
console.log(jonas['last' = nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

console.log(jonas[interestedIn]);

if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Unknown request! Choose between first name, last name, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmeditmann';
console.log(jonas);

// Challenge
// *Jonas has 3 friends, and his best friend is Michael

console.log(`${jonas.firstname} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]} `);

const billy = {
    firstName: 'Billy',
    lastnNme: 'Bobbobbob',
    birthYear: 1991,
    job: 'brick layer',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: true,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${billy.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's license.`
    } 
};

console.log(billy.calcAge(1991));

console.log(billy.age);
console.log(billy.age);
console.log(billy.age);


//Challenge
// billy is a 46 year old teacher, and he has a drivers license.

console.log(billy.getSummary());

const mark={
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
const john={
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

//John Smith's BMI (28.3) is higher than Mark Miller's (23.9)

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName})'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName})'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`)
}