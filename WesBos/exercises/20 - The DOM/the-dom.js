// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
const heading = document.querySelector('h2');
console.log(heading.textContent);
// set the textContent property on that element
heading.textContent = 'Wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);
console.log(heading.innerHTML);
console.log(heading.outerText);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 22`;

pizzaList.insertAdjacentText('afterbegin', '666');

/* eslint-disable */

//Classes
const pic = document.querySelector('.nice');
pic.classList.add();
console.log(pic.classList);

function toggleRound() {
    pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute dog';  // setter
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter

pic.addEventListener('load', function() {
    console.log(pic.naturalWidth); // getter
});

pic.setAttribute('alt', 'Really cute DOG!!');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});