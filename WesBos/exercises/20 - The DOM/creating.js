/* eslint-disable */
console.log('It works!!');

const myParagraph = document.createElement('p');

myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';

console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');

console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);


const heading = document.createElement('h2');
heading.textContent = 'Cools Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');
const li = document.createElement('li');
li.textContent = 'Three';
list.appendChild(li);

document.body.insertAdjacentElement('afterbegin', list);

const li5 = document.createElement('li');
li5.textContent = 'Five';
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = 'One';
list.insertAdjacentElement('afterbegin', li1);

const li4 = document.createElement('li');
li4.textContent = 'Four';
li5.insertAdjacentElement('beforebegin', li4);

const li2 = document.createElement('li');
li2.textContent = 'Two';
li1.insertAdjacentElement('afterend', li2);