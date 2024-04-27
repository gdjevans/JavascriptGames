// Javascript Engine
function jsengine(code) {
    return code.split(/\s+/);
}

const term = jsengine('var a = 5');
console.log(term);

// interpret vs compiler 
function someCalculation(x,y) {
    return x + y;
}

for (let i = 0; i < 1000; i++) {
    someCalculation(5,4);
}

// inline caching
function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

findUser(userData);