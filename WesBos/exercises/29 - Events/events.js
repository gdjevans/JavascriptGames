/* eslint-disable */
const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

//Listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

function buyItems() {
    console.log('BUYING ITEM!!!');
}

// buyButtons.addEventListener('click', buyItems);

buyButtons.forEach(function(buyButton) {
    console.log('Binding the buyButton');
    buyButton.addEventListener('click', buyItems);
})

buyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('YOU CLICKED IT');
    });
})