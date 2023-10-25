// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const greeting = (name) => {
  console.log('Hi ' + name);
}

const greeting2 = (name, salutation = 'Morning ') => {
  console.log(salutation + name);
}

const greeting3= (name, salutation = 'Morning ') => {
  alert(salutation + name);
}

greeting('Blurg');

greeting2('Mike', 'Welcome ');

greeting2('Shelly');