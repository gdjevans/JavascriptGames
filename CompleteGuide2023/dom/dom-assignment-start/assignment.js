const body = document.body;
body.style.backgroundColor = 'black';
const li = document.querySelectorAll('li');
for (const listItemEl of li) {
    listItemEl.style.color = 'white';
}

const headtitle = document.head.querySelector('title');
headtitle.textContent = 'Assignment - Solved!';

const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';